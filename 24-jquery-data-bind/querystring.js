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

/**
 * @description 转换为string字符串
 */
function stringify(obj,sep,eq){

}

window.querystring = {
  parse:parse,
  stringify:stringify
};