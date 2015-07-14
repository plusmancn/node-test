'use strict';
/**
 * node 简易私有Promise/A实现，实现链式调用
 */
var util = require('util');
var EventEmitter = require('events').EventEmitter;

/**
 * @description promise 实现
 */
var _Promise = function(){
  EventEmitter.call(this);
};

util.inherits(_Promise,EventEmitter);

_Promise.prototype.then = function(fulfillHandler,errorHandler,processHandler) {
  if (typeof fulfillHandler === 'function') {
    this.once('success',fulfillHandler);
  }

  if( typeof errorHandler === 'function'){
    this.once('error',errorHandler);
  }

  if (typeof processHandler === 'function') {
    this.on('process',processHandler);
  }

  return this; // 实现链式调用
};


/**
 * @description derfered 实现
 * 这里违背了一个原则，未完成态只能转向成功态和失败态，且过程不可逆
 * 可以利用state实现这种状态机制
 */
var _Deferred = function(){
  this.state = 'unfinished';
  this._promsie = new _Promise();
};

_Deferred.prototype.resolve = function(result) {
  this.state = 'fulfill';
  this._promsie.emit('success',result);
};

_Deferred.prototype.reject = function(error) {
  this.state = 'error';
  this._promsie.emit('error',error);
};

_Deferred.prototype.process = function(data) {
  this.state = 'process';
  this._promsie.emit('process',data);
};


/**
 * @description 1级链式调用
 */
function startFunc () {
  var _deferred =  new _Deferred();

  setTimeout(_deferred.resolve.bind(_deferred),1000,'startFunc resolve');
  setTimeout(_deferred.reject.bind(_deferred),2000,'startFunc reject');
  var intervalId = setInterval(_deferred.process.bind(_deferred),500,'startFunc process' + Date.now()); // 记录定时器ID
  setTimeout(clearInterval,3000,intervalId); // 4 秒后清空定时器 

  return _deferred._promsie;
}


startFunc()
.then(function(result){
  console.log(result); // startFunc resolve
},function(error){
  console.log(error); // startFunc reject
},function(process){
  console.log(process); // startFunc process1436803901861
}).then();



