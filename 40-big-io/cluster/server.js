var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });
} else {
  var count = 0;
  // Workers can share any TCP connection
  // In this case its a HTTP server
  http.createServer(function(req, res) {
    var downTime = 1e9;
    while(downTime--){};
    console.log(count++);
    res.writeHead(200);
    res.end("hello world\n");
  }).listen(8000);
}