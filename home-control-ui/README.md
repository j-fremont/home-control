# home-control-ui

Interface d'utilisation.

Install.

```
npm install
```

Run.

```
npm start
```

Build de l'image Docker.

```
docker build -t home-control-ui .
```

Run de l'image Docker.

```
docker run -d -p 3004:3000 \
--restart=always \
--name=home-ui \
-e NODEJS_HOST='192.168.1.10' \
-e NODEJS_PORT='9002' \
home-control-ui
```

