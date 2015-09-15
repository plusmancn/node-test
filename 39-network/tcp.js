var net = require('net');

var server = net.createServer(function(socket){
  socket.on('data',function(data){
    console.log(data);
    socket.write('您好\n');
  });

  socket.on('end',function(){
    console.log('链接断开');
  });

  socket.write('socket已经创建\n');
});

server.listen(8124,function(){
  console.log('server bound to 8124');
});

