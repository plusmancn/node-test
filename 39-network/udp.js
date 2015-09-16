var dgram = require('dgram');
var server = dgram.createSocket("udp4");

var message = new Buffer('服务器返回报文');
server.on('message',function(msg,rinfo){
  console.log("server got: " + msg + " from " + rinfo.address + ":" + rinfo.port);
  server.send(message,0,message.length,rinfo.port,rinfo.address,function(err,bytes){
    console.log(err,bytes);
  });
});

server.on('listening',function(){
  var address = server.address();
  console.log("server listening " + address.address + ":" + address.port);
});

server.bind(1234);