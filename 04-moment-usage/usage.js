'use strict';
/**
 * @description 
 * ```
 * 文档地址：http://momentjs.com/docs/#/displaying/format/
 * 时差问题解释：https://zybuluo.com/plusman/note/105522
 *
 * 1. 服务器&&客户端的时间格式遵循 ISO8601 时间格式定义，即(new Date()).toISOString()的输出格式
 * ```
 */
var moment = require('moment-timezone');
// 指定本地化语言版本
moment.locale('ZH-CN');


/**
 * moment1 === moment2，末尾的时区标识，Z代表+0000
 */
var moment1 = moment('2015-07-10T06:44:14.352Z'); 
console.log(moment1.format('YYYY-MM-DD HH:mm')); // 2015-07-10 14:44
console.log(moment1.fromNow()); // 21 分钟前

var moment2 = moment('2015-07-10T14:44:14.352+0800');
console.log(moment2.fromNow()); // 21 分钟前


/**
 * 时区转换
 */
var moment1AsiaShanghai = moment('2015-07-10T06:44:14.352Z').tz('Asia/Shanghai');
console.log(moment1AsiaShanghai.format('YYYY-MM-DD HH:mm')); // 2015-07-10 14:44