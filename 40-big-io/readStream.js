'use strict';
var fs = require('fs');
var filePath = './big.log';

var rs = fs.createReadStream(filePath,{
  flags:'r',
  encoding: 'utf8',
});

rs.on('readable',function(){
  var chunk;
  while (null !== (chunk = rs.read())) {
    console.log(chunk);
    console.log('got %d bytes of data', chunk.length);
  }
});