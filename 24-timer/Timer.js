/**
 * 事件驱动倒计时器
 * @param  {[type]} countDown 倒计时时间
 */
;(function(){
  function Timer (countDown) {
    // 参数设置
    this.countDown = countDown || 60; 
    this.timeoutId =  setTimeout(this.running.bind(this),1000);
    // 方法继承
    EventEmitter.call(this);
  }
  // 原型链继承
  Timer.prototype = Object.create(EventEmitter.prototype);

  // 倒计时
  Timer.prototype.running = function(){
    if (this.countDown > 1) {
      this.countDown -- ;
      this.now();
      this.timeoutId = setTimeout(this.running.bind(this),1000);
    }else{
      this.end();
    }
  };

  // 获取当前计时器数字
  Timer.prototype.now = function(){
    this.emit('now',this.countDown);
  };

  // 终止信号发射
  Timer.prototype.end = function(){
    clearTimeout(this.timeoutId);
    this.countDown = 0;
    this.emit('end');
  };

  window.Timer = Timer;
})();