var net = require('net');

var client = net.connect({
  // host:'sentry.plusman.cn',
  port: 1337
},function(){
  console.log('client connected');
  client.write('world!');
});

client.on('data',function(data){
  console.log(data.toString());
});

client.on('end',function(){
  console.log('client disconnected');
});