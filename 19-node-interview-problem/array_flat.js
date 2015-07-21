'use strict';
var input = [1, [2, [ [3, 4], 5], 6]];

// function flat(input){
//   var flat_array = [];
//   for (var i = 0; i < input.length; i++) {
//     if (Array.isArray(input[i])) {
//       flat_array.concat(flat(input[i]));
//     }else{
//       flat_array.push(input[i]);
//     }
//   };
// }

// var res = flat(input);
// console.log(res);

function flat(input){
  var str = JSON.stringify(input);
  var flat_array = [];
  str.replace(/(\d)/g,function(number){
    flat_array.push(+number);
  });
  return flat_array;
}
console.log(flat(input));