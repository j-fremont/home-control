#include <Wire.h>
#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <Adafruit_BMP280.h>

#define WIFI_SSID "SFR_9B4F"
#define WIFI_PASS "8t2dyqr67a2qa8z3ka6b"

#define MOSQUITTO_IP "192.168.1.10"

#define BMP280ADDR      0x76

IPAddress ipadress(192, 168, 1, 13);
IPAddress gateway(192, 168, 1, 1);
IPAddress subnet(255, 255, 255, 0);
IPAddress dns(192, 168, 1, 1);

Adafruit_BMP280 bmp;

WiFiClient espClient;
PubSubClient mqttClient(espClient);

const String sensor = String("test");

void setup() {

  Serial.begin(115200);
  Serial.println("WiFi connect...");
  
  Wire.pins(0,2);
  Wire.begin(0,2);

  bmp.begin(BMP280ADDR);

  WiFi.begin(WIFI_SSID, WIFI_PASS);
  pinMode(LED_BUILTIN, OUTPUT);
  while (WiFi.status() != WL_CONNECTED) {
    digitalWrite(LED_BUILTIN,HIGH);
    delay(250);
    digitalWrite(LED_BUILTIN,LOW);
    delay(250);
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

  String t = String(bmp.readTemperature());
  String p = String(bmp.readPressure());

  if (mqttClient.connected()) {

    Serial.println("MQTT connected");

    String t_msg = String("{\"sensor\":\"") + sensor + String("\",\"value\":") + String(t) + String("}");
    mqttClient.publish("temperature", t_msg.c_str());

    Serial.println(t_msg.c_str());

    String p_msg = String("{\"sensor\":\"") + sensor + String("\",\"value\":") + String(p) + String("}");
    mqttClient.publish("pressure", p_msg.c_str());

    Serial.println(p_msg.c_str());

    delay(600e6);
  }
}
