# sensor-server

Install.

```
npm install
```

Run.

```
node server.js
```

Build de l'image Docker.

```
docker build -t sensor-server .
```

Run de l'image Docker.

```
docker run -d \
--restart=always \
--name=sensor-server \
-e INFLUXDB_HOST='192.168.1.10' \
-e MOSQUITTO_HOST='192.168.1.10' \
-e MOSQUITTO_PORT='1883' \
sensor-server
```
