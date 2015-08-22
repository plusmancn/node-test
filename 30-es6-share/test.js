'use strict';
function *geFunc(){
  var f1 = yield function(){
    return 'haha';
  };
  var f2 = yield 'world';
  return 'end';
}

var geObj = geFunc();
var ret1 = geObj.next();
console.log(ret1.value());
console.log(geObj.next());
console.log(geObj.next());