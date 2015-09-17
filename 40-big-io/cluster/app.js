var http = require('http');

var count = 0;
http.createServer(function(req, res) {
  var downTime = 1e9;
  while(downTime--){};
  console.log(count++);
  res.writeHead(200);
  res.end("hello world\n");
}).listen(9000);