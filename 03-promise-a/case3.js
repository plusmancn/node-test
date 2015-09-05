'use strict';
var _Promise = function(_derfer){
  this.resolveStack = [];
  this.rejectStack = [];
  _derfer(this.resolve.bind(this),this.reject.bind(this));
};

_Promise.prototype.then = function(handleFulFill,handleReject){
  this.resolveStack.push(handleFulFill);
  this.rejectStack.push(handleReject);
  return this;
}

_Promise.prototype.resolve = function(success){
  this.resolveStack.shift()(success);
  this.rejectStack.shift();
}

_Promise.prototype.reject = function(error){
  this.resolveStack.shift();
  var rejectHandle = this.rejectStack.shift();
  if(!rejectHandle && this.rejectStack.length){
    this.reject(error);
  }else if(rejectHandle){
    rejectHandle(error)
  }
}

var p = new _Promise(function(resolve,reject){
  setTimeout(function(){
    Math.random() > 0.5 ? resolve('success') : reject('fail');
  })
});

p.then(function(success){
  console.log(success);
}).then(function(success){
  console.log('then2',success);
},function(error){
  console.log('then2',error);
})