/**
 * 延迟部分应该独立，健壮性能一般
 */
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
  var resolveHandle = this.resolveStack.shift();
  var res = resolveHandle(success);
  if (res) {
    var that = this;
    res.then(function(inSuccess){
      that.resolve(success);
    },function(inError){
      that.resolve(inError);
    });
  };
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
  },0)
});

p.then(function(success){
  console.log(success);
  var pIn = new _Promise(function(resolve,reject){
    setTimeout(function(){
      Math.random() > 0.5 ? resolve('pin success') : reject('pin fail');
    },1000);
  });
  return pIn;
}).then(function(success){
  console.log('then2',success);
},function(error){
  console.log('then2',error);
})