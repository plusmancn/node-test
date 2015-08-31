function CodeError(message,code) { 
  var errorFn = Error.apply(this,arguments);
  this.code = code || 1;
  this.message = errorFn.message;
} 
util.inherits(CodeError,Error);

var ce = new CodeError('a',1);
console.log(ce.code); // 1
console.log(ce.message); // a
