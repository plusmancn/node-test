'use strict';
// node --trace_gc -e gc.js > gc.log

/**
var a = [];
for(var i = 0; i < 1e6; i++) a.push(new Array(100));
*/


// node --prof gc.js
for(var i = 0; i < 1e6; i++){var a = {}};