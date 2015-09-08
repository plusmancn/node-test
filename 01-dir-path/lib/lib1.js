'use strict';
var testJson = require('../config/test.json');
console.log(testJson);

console.log(__filename,' at ',__dirname);
console.log(__filename,' cwd at ',process.cwd());


exports.getJson = function(){
  var testJson = require('../config/test.json');
  console.log('From function',testJson);  
}

