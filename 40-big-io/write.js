'use strict';
var fs = require('fs');

var filaPath = './big.log';
var data = new Error('错误写入').stack + '\n\n';

function m_file_write(){
  fs.writeFileSync(filaPath,data,{
    flag:'a+'
  });
}

function m_file_append(){
  fs.appendFileSync(filaPath,data,{
    flag:'a+'
  });
}


console.time('m_file');
for(var i=0 ;i < 1e5 ;i++){
  console.log('write at ' + i);
  m_file_append();
}
console.timeEnd('m_file');



// 平均消耗时间在：12697ms