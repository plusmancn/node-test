'use strict';
/**
 * @description  querystring转换实现
 */

/**
 * @description 转换 querystring 到 dict
 */
function parse(str,sep,eq) {
  sep = sep || '&';
  eq  = eq  || '=';
  var opts = {}; // 存储字典对象
  var regexp = /\+/g; // convert + to space
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  str.split(sep).forEach(function(val,index){
    val = val.replace(regexp,'%20');
    var kvs = val.split('=');
    var k = kvs[0];
    var v = kvs[1];

    if (!hasOwnProperty.call(opts,k)) {
      opts[k] = v ? decodeURIComponent(v) : '';
    }else if(Array.isArray(opts[k])){
      opts[k].push(v);
    }else{
      opts[k] = [opts[k],v];
    }
  });

  return opts;
}

// 私有版本实现
var testCase1 = 'invitation_code=213+123&phone=123&smscode=123123&smscode=111111&smscode=222222';
console.log(parse(testCase1));

// node自带测试
var querystring = require('querystring');
console.log(querystring.parse(testCase1));

/**
// 私有版本
{ invitation_code: '213 123',
  phone: '123',
  smscode: [ '123123', '111111', '222222' ] }

// node自带测试
{ invitation_code: '213 123',
  phone: '123',
  smscode: [ '123123', '111111', '222222' ] }
[Finished in 0.1s]
 */


