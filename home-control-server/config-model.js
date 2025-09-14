
var config = module.exports = {};

config.nodemcu = {
  host: '${NODEMCU_HOST}',
  port: '${NODEMCU_PORT}'
};

config.influxdb = {
  host: '${INFLUXDB_HOST}',
  port: '${INFLUXDB_PORT}'
};

config.server = {
  host: '${NODEJS_HOST}',
  port: '${NODEJS_PORT}'
};

