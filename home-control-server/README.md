# home-control-server

Serveur HTTP NodeJS pour home-control-ui.

+ Envoi des commandes au NodeMCU pour le thermostat.

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
docker build -t home-control-server .
```

Run de l'image Docker.

```
docker run -d -p 9002:9000 \
--restart=always \
--name=home-server \
-e NODEJS_HOST='192.168.1.10' \
-e NODEMCU_HOST='192.168.1.11' \
-v /home/pi/home-control-server/data:/usr/src/app/data \
home-control-server
```
