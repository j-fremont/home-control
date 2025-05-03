#include <ESP8266WiFi.h>
#include <NTPClient.h>
#include <WiFiUdp.h>

#define WIFI_SSID "SFR_9B4F"
#define WIFI_PASS "8t2dyqr67a2qa8z3ka6b"

const long utcOffsetInSeconds = 3600;

char daysOfTheWeek[7][12] = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};

IPAddress ip(192,168,1,15);
IPAddress gateway(192,168,1,1);
IPAddress subnet(255,255,255,0);

WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "pool.ntp.org", utcOffsetInSeconds);

void setup() {
  // put your setup code here, to run once:

  Serial.begin(115200);
  Serial.println("WiFi connect");

  if (WiFi.config(ip, gateway, subnet)) {
    Serial.println("Static IP configured");
  }
  else {
    Serial.println("Static IP configuration failed");
  }

  WiFi.begin(WIFI_SSID, WIFI_PASS);

  while (WiFi.status() != WL_CONNECTED) {
    digitalWrite(LED_BUILTIN,HIGH);
    delay(500);
    digitalWrite(LED_BUILTIN,LOW);
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.print(WiFi.localIP());
  Serial.println("");

  timeClient.begin();

  delay(5000);
}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.println("IP address: ");
  Serial.print(WiFi.localIP());
  Serial.println("");

  timeClient.update();

  Serial.print(daysOfTheWeek[timeClient.getDay()]);
  Serial.print(", ");
  Serial.print(timeClient.getHours());
  Serial.print(":");
  Serial.print(timeClient.getMinutes());
  Serial.print(":");
  Serial.println(timeClient.getSeconds());
  
  delay(1000);
}
