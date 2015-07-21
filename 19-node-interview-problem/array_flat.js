'use strict';
/**
 * 字符串化实现
 */
var input = [1, [2, [[3, 4], 5], 6]];

function flat(input){
  var str = JSON.stringify(input);
  var flat_array = [];
  str.replace(/(\d)/g,function(number){
    flat_array.push(+number);
  });
  return flat_array;
}

console.log(flat(input));


/**
 * 递归实现
 */
function flat_resucre(input){
  var flat_array = [];

  function loop(arg){
    for (var i = 0; i < arg.length; i++) {
      if (Array.isArray(arg[i])) {
          loop(arg[i]);
      }else{
        flat_array.push(arg[i]);
      }
    }
  }

  loop(input);
  return flat_array;
}

console.log(flat_resucre(input));
