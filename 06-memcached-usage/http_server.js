'use strict';
/**
 * @description http + memcached 使用测试
 *
 * ## curl 测试命令
 * ```
 * curl -X GET 'http://127.0.0.1:9002/?action=set' // 设置测试 
 * curl -X GET 'http://127.0.0.1:9002/?action=get' // 获取测试
 * ```
 * ## to know
 * memcached 是否每次进行操作时，都会检查存在已有链接？不存在则创建，存在则复用。也就是timeout的作用
 * memcached.end() 方法关闭了连接，但是过了超时时间后，才会进程结束，为什么？
 * 
 */
var http = require('http');
var url  = require('url');
var Memcached = require('memcached');

http.createServer(function(req,res){
  var query = url.parse(req.url,true).query;
  var memcached = new Memcached('127.0.0.1:11211');

  res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});

  if (query.action === 'set') {
    memcached.set('key',Date.now(),3600*10,function(err){
      res.end('set return: ' + JSON.stringify(err));
    });
  }

  else if(query.action === 'get'){
    memcached.get('key',function(err,data){
      res.end('get return: ' + JSON.stringify(err) + JSON.stringify(data));
    });
  }

  else{
    res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});
    res.end('page not find');
  }

}).listen(9002);
console.log('server listen on 9002');