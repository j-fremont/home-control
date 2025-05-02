#include <ESP8266WiFi.h>
#include <PubSubClient.h>

#define WIFI_SSID "MY_SSID"
#define WIFI_PASS "MY_PASS"

IPAddress ip(192,168,1,14);
IPAddress gateway(192,168,1,1);
IPAddress subnet(255,255,255,0);

#define MOSQUITTO_IP "192.168.1.10"

WiFiClient espClient;
PubSubClient mqttClient(espClient);

void setup() {
  // put your setup code here, to run once:

  Serial.begin(115200);
  Serial.println("WiFi connect...");

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
    Serial.println("Connect...");
  }

  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

  mqttClient.setServer(MOSQUITTO_IP, 1883);

  mqttClient.connect("ESP8266");
  Serial.println("MQTT connect...");
  
  delay(5000);
}

void loop() {
  // put your main code here, to run repeatedly:

  mqttClient.connect("ESP8266");
  Serial.println("MQTT connect...");

  if (mqttClient.connected()) {
    Serial.println("MQTT connected");
  }

  delay(600e3);
}
