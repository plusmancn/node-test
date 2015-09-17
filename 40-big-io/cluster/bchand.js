'use strict';
var request = require('request');
var async = require('async');

function requestServer(callback){
  request.get('http://127.0.0.1:8000/',function(error,response,body){
    if (!error && response.statusCode == 200) {
      callback(error,body);
    }else{
      console.log(error);
    }
  });
}

// 单线程测试
console.time('single thread');
async.timesSeries(1e2,function(n,next){
  console.log(n);
  requestServer(next);
},function(err,results){
  console.log(err,results);
  var cc = console.timeEnd('single thread');
});