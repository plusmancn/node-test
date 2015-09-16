var dgram = require('dgram');

var message = new Buffer('深入浅出node.js');
var client = dgram.createSocket('udp4');

client.send(message,0,message.length,1234,"localhost",function(err,bytes){
  console.log(err,bytes);
});

client.on('message',function(msg,rinfo){
  console.log("server got: " + msg + " from " + rinfo.address + ":" + rinfo.port);
});


console.log(message);
console.log(message.length);