#include <ESP8266WiFi.h>
#include <WiFiClient.h>

#define WIFI_SSID "MY_SSID"
#define WIFI_PASS "MY_PASS"

IPAddress ip(192,168,1,14);
IPAddress gateway(192,168,1,1);
IPAddress subnet(255,255,255,0);

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

  delay(5000);
}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.println("IP address: ");
  Serial.print(WiFi.localIP());
  Serial.println("");
  
  delay(1000);
}
