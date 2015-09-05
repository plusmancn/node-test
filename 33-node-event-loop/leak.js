'use strict';
var http = require('http');
var heapdump = require('heapdump');
var leakArray = [];
var leak = function(){
  leakArray.push('leak' + Math.random());
}
http.createServer(function(req,res){
  leak();
  res.writeHead(200,{'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337);