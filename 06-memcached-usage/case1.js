'use strict';
/**
 * @description 
 * # memcached 使用示例
 * 
 * ##  参考资料
 * [Improve Your App’s Performance with Memcached](http://code.tutsplus.com/tutorials/improve-your-apps-performance-with-memcached--net-26768)
 * [node memcached api](https://www.npmjs.com/package/memcached)
 * 
 * ## 启动memcache进程
 * ```shell
 * memcached -m 64 -c 1024 -p 11211 -d  // 启动一个最大内存占用为64M，最大连接数为1024，端口在11211的后台（-d）守护进程。
 * ```
 * 
 * ## cas
 * key值，版本号记录 ，用于竞争访问情况下的同步锁问题,
 *
 * ## 进程退出问题
 * timeout 设置为5秒；具体作用是？
 */
var Memcached = require('memcached');

var memcached = new Memcached('127.0.0.1:11211');

/**
 * @description 键 创建函数
 * @param {String} key 键值
 * @param {Number} lifetime 过期时间，秒为单位
 * @param {Function} callback 回调函数，function(err){}
 */
memcached.touch('key', 10, function (err) {
  console.log(err,'m.touch'); // undefined 'm.touch'

  memcached.add('key','value_by_add',10,function(err){
    console.log(err,'m.add'); // { [Error: Item is not stored] notStored: true } 'm.add'
  });

});

/**
 * @description 设置键值，如果不存在则创建，存在则覆盖；
 * replace 方法，存在覆盖，不存在报错
 */
memcached.set('key','value_by_set',10,function(err){
  console.log(err,'m.set'); // undefined 'm.set'
});


/**
 * @description 获取值 
 */
memcached.get('key',function(err,data){
  console.log(err,data,'m.get.key'); // undefined 'value_by_set' 'm.get.key'
});

/**
 * @description 测试获取不存在的键值
 */
memcached.get('key_not_exits',function(err,data){
  console.log(err,data,'m.get.key_not_exits'); // undefined undefined 'm.get.key_not_exits'
});

/**
 * @description 测试关闭连接方法
 */
memcached.end();

/**
 * @description 再次尝试获取信息，会尝试重新建立连接
 */
memcached.get('key',function(err,data){
  console.log(err,data,'m.get.key.after.close.connetction'); 
  // undefined 'value_by_set' 'm.get.key.after.close.connetction'
})

