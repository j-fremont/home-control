# home-control

Projet d'automatisation de la maison.

## home-control-server

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

## home-control-ui

Interface utilisateur.

Install.

```
npm install
```

Run.

```
npm start
```

# Images Docker

## Build

Pour home-control-server.

```
docker build -t home-control-server .
```

Pour home-control-ui.

```
docker build -t home-control-ui .
```

## Run

Pour home-control-server.

```
docker run -d -p 9002:9000 \
--restart=always \
--name=home-server \
-e NODEJS_HOST='192.168.1.10' \
-e NODEMCU_HOST='192.168.1.11' \
-v /home/pi/home-control-server/data:/usr/src/app/data \
home-control-server
```

Pour home-control-ui.

```
docker run -d -p 3004:3000 \
--restart=always \
--name=home-ui \
-e NODEJS_HOST='192.168.1.10' \
-e NODEJS_PORT='9002' \
home-control-ui
```





