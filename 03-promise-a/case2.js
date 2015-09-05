/**
 * 原生Promise的实现
 * 
 */
'use strict';
var p = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('success');
    },2000)
});

var tt = p.then(function(res){
    console.log(res);
    var pIn = new Promise(function(resolve){
        resolve('in s')
    });
    return pIn;
},function(reject){
    console.log(reject);
}).then(function(res){
    console.log(res);
},function(reject){
    console.log(reject);
});

