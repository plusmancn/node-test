'use strict';
var fs = require('fs');
var filePath = './big.log';

function readEntire(){
  console.time('readFile');
  fs.readFile(filePath,function(err,data){
    console.log(err);
    console.timeEnd('readFile');
  });
}

// Error
// [RangeError: File size is greater than possible Buffer: 0x3FFFFFFF bytes]
// readFile: 2ms


/***==============================line==============================***/

var readline = require('readline');
function readByLine(){
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("What do you think of node.js? ", function(answer) {
    // TODO: Log the answer in a database
    console.log("Thank you for your valuable feedback:", answer);
    rl.close();
  });
}

readByLine();