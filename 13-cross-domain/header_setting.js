'use strict';
/**
 * @description 
 * ## jsonp
 *
 * ## allow-a
 * 
 * ## 参考文献
 * [No 'Access-Control-Allow-Origin' header is present on the requested resource](http://stackoverflow.com/questions/20035101/no-access-control-allow-origin-header-is-present-on-the-requested-resource)
 *
 * ## 设置服务器返回头，在服务器可控制的情况下
 * "access-control-allow-origin:*" 
 */
res.set('Access-Control-Allow-Origin','*');
res.set('Access-Control-Allow-Methods','POST, GET, DELETE, PUT');