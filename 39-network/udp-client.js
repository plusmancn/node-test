var dgram = require('dgram');

var message = new Buffer('深入浅出node.js');
var client = dgram.createSocket('udp4');

client.send(message,0,message.length,1234,"127.0.0.1",function(err,bytes){
  console.log(err,bytes);
});

var boomIndex = 0;
client.on('message',function(msg,rinfo){
  console.log("client got: " + msg + " from " + rinfo.address + ":" + rinfo.port + ' at ' + (boomIndex));
  var message = new Buffer('消息炸弹' + boomIndex++);
  client.send(message,0,message.length,1234,"127.0.0.1",function(err,bytes){
  })
});