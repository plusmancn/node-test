'use strict';
/**
 * node 简易promise实现
 */
var EventEmitter = require('events').EventEmitter;

var Promise = function(){
  EventEmitter.call(this);
}

Promise.prototype.then = function(fulfil) {
  // body...
};