'use strict';
/**
 * 严格模式下 作用域 和 this 指针测试
 * 1. function 有独立作用域，但是this指针为undefined
 * 2. function 在new后，拥有指向新实例对象的this指针，且拥有独立作用域
 * 3. {},对象没有独立作用域，{} 相当于执行 new Object，所以this指针不为空，其实原型也是Object对象
 * 4. 函数是JS里面唯一拥有独立作用域的块级元素 ？？？？
 */
function Test () {
  var x = 'testX'; // 仅存在函数作用域内，不会挂载到实例对象上(this)

  var that = this;  // 由于 Test 进行了 new 操作，所以 this 指向新的实例对象
  that.y = 'testY'; // y 会被挂载到this对象上，等同于 this.y = 1;

  var getX = function(){
    // getX 的 this 对象指向 getX 所在的 {} 的实例对象，所以无法访问到，this.y，但是可以
    // 访问到 Test 作用域内的 x 变量
    return x + this.objX;
  };

  return {
    getX:getX,
    objX:'objX'
  }
};

var test = new Test();
console.log(test.getX()); // output: testXobjX


/**
 * 非严格模式下
 * x = 2 相当于自信 global.x = 2 或者 window.x = 2 ，前提是在 x 未定义的情况下
 * 严格模式下测试
 * var x = 2 只在作用域内生效，global.x 为 undefined
 */
var x = 2;
console.log('global.x was',global.x); // output: global.x was undefined


/**
 * 作用域的向上寻找特性，global 对象是超越文件的，存在于内存中
 */
// output: scope.y was 13
global.y = 12;
(function(){
  var y = 13;
  (function(){
    console.log('scope.y was',y);
  })(); 
})();

// output: scope.y was 12
(function(){
  (function(){
    console.log('scope.y was',y);
  })(); 
})();




