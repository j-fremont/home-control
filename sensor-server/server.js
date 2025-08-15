'use strict';

import { createServer } from "http";
import { Server } from "socket.io";

import mqtt from 'mqtt';
import Influx from 'influx';

var config = {
  influxdb: {
    host: '192.168.1.10'
  },
  mqtt: {
    host: '192.168.1.10',
    port: 1883
  }
};
  
var websock = undefined;

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000"
  }
});

const influx = new Influx.InfluxDB({
  host: config.influxdb.host,
  database: 'homedb',
  schema: [{
    measurement: 'weather',
    fields: {
       temperature: Influx.FieldType.FLOAT,
       humidity: Influx.FieldType.FLOAT,
       luminosity: Influx.FieldType.FLOAT,
       pressure: Influx.FieldType.FLOAT
    },
    tags: ['sensor']
  }]
});

const writeTemperature = (message) => {
  influx.writePoints([{
    measurement: 'weather',
    tags: { sensor: message.sensor },
    fields: {
      temperature: message.value
    }
  }],{
    precision: 'm'
  });
};

const writeHumidity = (message) => {
  influx.writePoints([{
    measurement: 'weather',
    tags: { sensor: message.sensor },
    fields: {
      humidity: message.value
    }
  }],{
    precision: 'm'
  });
};

const writeLuminosity = (message) => {
  influx.writePoints([{
    measurement: 'weather',
    tags: { sensor: message.sensor },
    fields: {
      luminosity: message.value
    }
  }],{
    precision: 'm'
  });
};

const writePressure = (message) => {
  influx.writePoints([{
    measurement: 'weather',
    tags: { sensor: message.sensor },
    fields: {
      pressure: message.value
    }
  }],{
    precision: 'm'
  });
};

var client = mqtt.connect('mqtt://' + config.mqtt.host + ':' + config.mqtt.port);

client.on('connect', () => {

  console.log('connection mqtt topics');

  client.subscribe('temperature');
  client.subscribe('humidity');
  client.subscribe('luminosity');
  client.subscribe('pressure');
});

client.on('message', (topic, message) => {

  console.log('message from topic ' + topic + ' - message : ' + message);
  
  const json = JSON.parse(message);

  switch (topic) {
    case 'temperature':
      writeTemperature(json);
      emit('sock_temperature', json);
      break;
    case 'humidity':
      writeHumidity(json);
      emit('sock_humidity', json);
      break;
    case 'luminosity':
      writeLuminosity(json);
      emit('sock_luminosity', json);
      break;
    case 'pressure':
      writePressure(json);
      emit('sock_pressure', json);
      break;
    default:
      console.log('Topic ' + topic + 'unknown...');
  }
});

const emit = (message, value) => {
  if (websock===undefined) {
    console.log('websocket undefined...');
  } else {
    websock.emit(message, value);
  }
};

io.on('connection', socket => {
  console.log('connection web socket');
  websock=socket;
});

httpServer.listen(9000);

