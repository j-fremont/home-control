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

Run avec setup.

```
export NODEJS_HOST=localhost
export NODEJS_PORT=9000
export NODEMCU_HOST=192.168.1.11
export NODEMCU_PORT=8000
export PATH=/home/fremont/node-v22.17.0-linux-arm64/bin/:$PATH
./start.sh
```

Build de l'image Docker.

```
docker build -t home-control-server .
```

Run de l'image Docker.

```
docker run -d -p 9001:9000 \
--restart=always \
--name=home-server \
-e NODEJS_HOST='192.168.1.10' \
-e NODEJS_PORT='9000' \
-e NODEMCU_HOST='192.168.1.11' \
-e NODEMCU_PORT='8000' \
-v /home/pi/home-control-server/data:/usr/src/app/data \
home-control-server
```
