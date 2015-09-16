var http = require('http');

var options = {
  hostname: 'www.baidu.com',
  port: 80,
  path: '/',
  method: 'GET'
}

var req = http.request(options,function(res){
  console.log('STATUS：' + res.statusCode);
});

req.end();

