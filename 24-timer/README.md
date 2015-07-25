# 事件驱动倒计时器
> 顺带研究下浏览器的事件机制

## Usage
**引用**
```html
<script type="text/javascript" src="./EventEmitter.min.js"></script>
<script type="text/javascript" src="./timer.js"></script>
```
**示例**
```javascript
// 初始化一个计数器为10秒，默认为60秒
var timer = new Timer(10); 
// 监听now事件，同时获取计时器内部状态
timer.on('now',function(now){
  console.log(now); // 显示当前计时器剩余秒速
});
// 监听end事件
timer.on('end',function(){
  console.log('计时结束'); // 计时结束调用方法
});
// 手动终止计时器，同时触发end事件
timer.end();
```


## EventEmitter
浏览器内的event都是基于dom的，而EventEmitter是通过队列的形式实现。