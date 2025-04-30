#include <ESP8266WiFi.h>

#define WIFI_SSID "SFR_9B4F"
#define WIFI_PASS "8t2dyqr67a2qa8z3ka6b"

void setup() {
  // put your setup code here, to run once:

  Serial.begin(115200);
  Serial.println("WiFi connect...");

  WiFi.begin(WIFI_SSID, WIFI_PASS);

  while (WiFi.status() != WL_CONNECTED) {
    digitalWrite(LED_BUILTIN,HIGH);
    delay(500);
    digitalWrite(LED_BUILTIN,LOW);
    delay(500);
    Serial.println("Connect...");
  }

  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
  
  delay(5000);
}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
  delay(1000);
}
