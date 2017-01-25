var SocketCluster = require('socketcluster').SocketCluster;

new SocketCluster({
  workers: 4,
  brokers: 1,
  port:  8000,
  wsEngine: process.env.WSE || 'ws',
  workerController: __dirname + '/worker.js',
  brokerController: __dirname + '/broker.js'
});

