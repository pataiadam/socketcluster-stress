module.exports.run = function (worker) {
  console.log('   >> Worker PID:', process.pid);
  var scServer = worker.scServer;
  var count = 0;

  scServer.on('connection', function (socket) {
    count++;
    console.log(count);
    
    socket.on('event', function (data) {
      socket.emit('event', data)
    });

    socket.on('disconnect', function () {
      count--;
      console.log(count);
    });
  });
};
