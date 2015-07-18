# 如何写出胸怀世界的时间代码

---
更好的代码阅读体验，请移步 [作业部落 （1）如何写出胸怀世界的时间代码][1]

---
## ISO 8601 计时法
[ISO 8601][2]计时法规定，`2015-06-05T12:33:51.012Z` 末尾的Z代表UTC时间，且时间内需要带有前导0（6需要写成06）。UTC代表世界协调时间，即0号时区，约等于格林尼治事件，上面的时间还可以表示为`2015-06-05T12:33:51.012+0000`；
天朝的北京时间（东8区），如果上面的时间表示为北京时间的话 `2015-06-05T20:33:51.012+0800`。
注意上面关键词是转换，上面两个时间是同一个时间的不同表述方法而已。
Ps:
因为地球是自西向东转的，所以我们比西边的人，早看到太阳，所以要+0800 （地理：读者视角，看地图，上北下南左西右东）
![地球转向，自西向东][3]

---
## 8小时时差的由来
时间缺少时区标识符 && 服务器和客户端默认时区不同造成。
如 [LeanCloud 云代码8小时时差问题][4]
看一段示例代码
```javascript
'use strict'
var localeTime = new Date('2015-01-12T12:00:00.000'); // 1-12 需要写成01-12，表达式也等于 var localeTime = new Date('2015-01-12T12:00:00.000Z);
console.log(localeTime.toISOString());//output 2015-01-12T12:00:00.000Z，ISO 8601 时间
console.log(localeTime.toLocaleString()); //output 1/12/2015, 8:00:00 PM // 转换为当地时间，此处为东8区，+8小时。
```
缺少时区标识，如果在同一个运行环境下执行，本身也没有什么问题，但是假设，服务器的时区设置为0时区（UTC时间），浏览器设置是东8区时间。
用户浏览器时区是东8区，生成时间 2015-01-12 12:00:00.000，
通过 new Date('2015-01-12 12:00:00.000')存入数据库后，最后存储对象实际是 2015-01-12T12:00:00.000Z，转换为东8区后，实际是，2015-01-12T20:00:00.000Z。

**如果时间是在服务器上处理成字符串后传给浏览器的，浏览器视觉上看上去是对的；但是，如果把2015-01-12T12:00:00.000Z直接交给浏览器处理，在经由new Date，就会比预期多出8小时。**

---
## 12:00 PM 还是 1:00 PM 哪个时间大
事实总是不是你看到的这样，js做了取余操作，12 % 12 =0 
```javascript
'use strict'
console.log(new Date('1/12/2015, 12:00:00 PM').getTime() - new Date('1/12/2015, 1:00:00 PM').getTime()); // output  -3600000
console.log(new Date('1/12/2015, 12:00:00 PM').getTime()); // 1421035200000
console.log(new Date('1/12/2015, 00:00:00 PM').getTime()); // 1421035200000
console.log(new Date('1/12/2015, 1:00:00 PM').getTime());  // 1421038800000
```

---
## 如何规避时区问题
**客户端在给服务器传送时间的时候，带上时区标识；同理，服务器回传的时候，也需要带上时区标识**
通过下列代码可以获取到当前所在时区，然后进行字符串拼接
```javascript
'use strict'
- new Date().getTimezoneOffset()/60 // output 8，东8区
```
如果获取当前时间，可以简单的使用如下写法。
```javascript
'use strict'
new Date().toISOString(); //获取当前时间
```
传递完整的时间信息，让最终的接收端去做最后的时间处理，可以实现时间的本地化（设备可以获取到当前时区）；
更多的好处是，时间格式可以用更加友好的形式展现给用户，不会受困于地区和国家的变化。
**尝试使用 [moment-timezone][5]**
文档很完善，node && browser support.

---
## 时间格式化函数
参考了网上现有的[JS日期时间格式][6]函数，综合性能和易用性，采用拓展原生Date prototype，添加format方法，添加格式化参数引号内字符串不解析特性，示例如下。
```javascript
'use strict'
/** 
 * 对日期进行格式化， 
 * @param date 要格式化的日期 
 * @param format 进行格式化的模式字符串
 *     支持的模式字母有： 
 *     y:年, 
 *     M:年中的月份(1-12), 
 *     d:月份中的天(1-31), 
 *     H:小时(0-23), 
 *     m:分(0-59), 
 *     s:秒(0-59), 
 *     S:毫秒(0-999),
 *     q:季度(1-4)
 * @return String
 * @author plusmancn@gmail.com
 *
 *  使用示例
 *  new Date().format('yyyy-MM-dd HH:mm:ss "season" q'); // 2015-06-07 11:mm:17 season 2
 *  new Date().format("yyyy-MM-dd HH:mm:ss 'season' q"); // 2015-06-07 11:mm:17 season 2
 *  new Date().format('yyyy-MM-dd HH:mm:ss 季度：q'); // 2015-06-07 11:mm:17 季度：2
 *  new Date().format('yyyy-MM-dd HH:mm:ss "季度："q'); //2015-06-07 11:mm:17 02 
 *  // 存在Bug，不能在内部引号后紧跟标识符，中文可以通过第三个示例解决，英文单词间一般都有空格，所以影响不大。
 */

Date.prototype.format = function(fmt) {
  var o = {
    'y':this.getFullYear(),
    'M':this.getMonth() + 1,
    'd':this.getDate(),
    'H':this.getHours(),
    'm':this.getMinutes(),
    's':this.getSeconds(),
    'S':this.getMilliseconds(),
    'q':Math.floor((this.getMonth() + 3) / 3),
  }

  return fmt.replace(/('.*'|".*"|[yMdHmsSq])+/g,function(all,p){
    if (p === 'y') {
      return ('' + o['y']).substr(4-all.length);
    }else if(!!o[p]){
      var v = ''+o[p];
      return ('0'+v).substr(-v.length + (v.length < 2 && all.length > 1?-1:0));
    }else{
      return all.replace(/['"]/g,'');
    }
  });
};
```


  [1]: https://zybuluo.com/plusman/note/105522
  [2]: http://zh.wikipedia.org/w/index.php?title=ISO_8601&_=20150605114027
  [3]: http://upload-images.jianshu.io/upload_images/445158-b53bcbcb2f0ff4f8.jpg
  [4]: https://leancloud.cn/docs/cloud_code_guide.html#%E6%97%B6%E5%8C%BA%E9%97%AE%E9%A2%98
  [5]: http://momentjs.com/timezone/
  [6]: http://yaniswang.com/frontend/2013/02/16/dateformat-performance/