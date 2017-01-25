const maxClientCount = 1000;
let clientCount = 0;
let msgNumAll = 0;
let totalPublish = 0;
let start = Date.now();

(function conn() {
  if(clientCount >= maxClientCount) {
    //reset counters
    totalPublish = 0;
    msgNumAll = 0;
    start = Date.now();
    return;
  }

  clientCount++;
  console.log(clientCount);
  let client = require('socketcluster-client').connect({
    hostname: '127.0.0.1',
    port: 8000,
    multiplex: false
  });
  
  client.on('event', function (data) {
    msgNumAll++;
  });

  setInterval(function () {
    totalPublish++;
    client.emit('event', {
      message: 'Hello'
    });
  }, 50);

  conn();
})();

setInterval(function () {
  console.log("==================");
  console.log("|=|  TC/MC: " + clientCount + '/' + maxClientCount);
  console.log("|=|  msgPublished: " + totalPublish);
  console.log("|=|  msgReceived: " + msgNumAll);
  console.log("|=|  P/R: " + (totalPublish/msgNumAll));
  var e = (Date.now() - start) / 1000;
  console.log("|=|  msg/sec: " + msgNumAll / e);
  console.log("==================");
}, 1000);