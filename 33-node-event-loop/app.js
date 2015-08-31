'use strict';
var http = require('http');
var url = require('url');
var cpus = require('os').cpus();
var cp = require('child_process');

function loop_cpu_intensive(callback){
  var count = 1e10;
  while(count--){};
  callback();
}

function loop_time_wait(callback){
  setTimeout(function(){
    callback();
  },5000);
}

var server = http.createServer(function(req,res){
  var query = url.parse(req.url,true).query;
  switch(query.act){
    case 'loop_cpu_intensive_child_process':
      cp.execFile('./loop_cpu_intensive.js',function(err,stdout,stderr){
        res.end(stdout);
      });
      break;
    case 'loop_cpu_intensive':
      loop_cpu_intensive(function(){
        res.end('loop_cpu_intensive');
      });
      break;
    case 'loop_time_wait':
      loop_time_wait(function(){
        res.end('loop_time_wait');
      });
      break;
    case 'imediate':
      res.end('immediate');
      break;
    default:
      res.end('cpus is ' + cpus.length);
      break;
  }
});

server.listen(3000,function(e){
  console.log('server listen on 3000');
});