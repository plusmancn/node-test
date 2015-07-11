'use strict';
var http = require('http');

http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
  console.log(req.url + Date.now());
  res.end(req.url + ' at time ' + Date.now() + ' \n');
}).listen(9002);

console.log('server listen on 9002');