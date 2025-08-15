#!/bin/sh

envsubst < server-model.js > server.js

node server.js

