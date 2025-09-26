#!/bin/sh

envsubst < build/environment-template.js > build/environment.js

node server/index.js
