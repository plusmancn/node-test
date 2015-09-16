var net = require('net');

var server = net.createServer(function(socket){
  socket.write('Echo Server\n');
  socket.pipe(socket);
});

server.listen(1337,'0.0.0.0');