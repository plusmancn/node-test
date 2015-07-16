'use strict';
var lib1 = require('./lib/lib1.js');

lib1.getJson();

console.log(__filename,' at ',__dirname);
console.log(__filename,' cwd at ',process.cwd());


var inner_module = require('inner_module/lib/dir-path-node-modules-lib.js');
