#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <DHT.h>

#define WIFI_SSID "MY_SSID"
#define WIFI_PASS "MY_PASS"

IPAddress ip(192,168,1,14);
IPAddress gateway(192,168,1,1);
IPAddress subnet(255,255,255,0);

#define MOSQUITTO_IP "192.168.1.10"

#define DHTPIN 1
#define DHTTYPE DHT11

WiFiClient espClient;
PubSubClient mqttClient(espClient);

DHT dht(DHTPIN, DHTTYPE);

const String sensor = String("test");

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

    dht.begin();
  
    float t = dht.readTemperature();
    float h = dht.readHumidity();

    if (isnan(t) || isnan(h)) {
      return;
    }

    String t_msg = String("{\"sensor\":\"") + sensor + String("\",\"value\":") + String(t,1) + String("}");
    mqttClient.publish("temperature", t_msg.c_str());
    String h_msg = String("{\"sensor\":\"") + sensor + String("\",\"value\":") + String(h,1) + String("}");
    mqttClient.publish("humidity", h_msg.c_str());

    Serial.println(t_msg.c_str());
    Serial.println(h_msg.c_str());
  }

  delay(600e3);
}
