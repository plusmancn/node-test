'use strict';
;(function(name,defination){
  var hasDefine = typeof define === 'function';
  var hasExports = typeof module !== 'undefined' && module.exports;

  if (hasDefine) {
    // AMD环境或者CMD环境
    define(defination); 
  } else if(hasExports){
   // 普通node环境 
    module.exports = defination();
  }else{
    // 浏览器支持
    window[name] = defination(); 
  }
})('browserEnvdetect',function(){
  /**
   * 浏览器运行环境判断
   * @param  {String} userAgent 用户浏览器头，express 可传递 req.headers['user-agent']; 浏览器内使用可以为空，默认获取 navigator.userAgent;
   * @return {class}  浏览器环境检测类
   */
  function BrowserEnvdetect(userAgent){
    this.u = userAgent || ((typeof navigator !== 'undefined') && navigator.userAgent);
    if(!this.u) {
      throw new Error('userAgent参数缺失且当前不是浏览器环境');
    }
  }

  BrowserEnvdetect.prototype.isTrident = function() {
    return this.u.indexOf('Trident') > -1; //IE内核
  };
    
  BrowserEnvdetect.prototype.isPresto = function(){
    return this.u.indexOf('Presto') > -1; //opera内核
  };
    
  BrowserEnvdetect.prototype.isWebKit = function(){
    return this.u.indexOf('AppleWebKit') > -1; //苹果、谷歌内核
  };
    
  BrowserEnvdetect.prototype.isGecko = function(){
    return this.u.indexOf('Gecko') > -1 && this.u.indexOf('KHTML') === -1; //火狐内核
  };
    
  BrowserEnvdetect.prototype.isMobile = function(){
    return !!this.u.match(/mobile/i); //是否为移动终端
  };
    
  BrowserEnvdetect.prototype.isIos = function(){
    return !!this.u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  };
    
  BrowserEnvdetect.prototype.isAndroid = function(){
    return this.u.indexOf('Android') > -1 || this.u.indexOf('Linux') > -1; //android终端或者uc浏览器
  };
    
  BrowserEnvdetect.prototype.isIPhone = function(){
    return this.u.indexOf('iPhone') > -1; //是否为iPhone或者QQHD浏览器
  };
    
  BrowserEnvdetect.prototype.isIPad = function(){
    return this.u.indexOf('iPad') > -1; //是否iPad
  };
    
  BrowserEnvdetect.prototype.isWebApp = function(){
    return this.u.indexOf('Safari') === -1; //是否web应该程序，没有头部与底部
  };
    
  BrowserEnvdetect.prototype.isWeixin = function(){
    return this.u.indexOf('MicroMessenger') > -1; //是否微信 （2015-01-22新增）
  };
    
  BrowserEnvdetect.prototype.isQq = function(){
    return this.u.indexOf('QQ') !== -1;
  };
    
  BrowserEnvdetect.prototype.isSafari = function(){
    return this.u.indexOf('Safari') !== -1; //是否是safari
  };
    
  BrowserEnvdetect.prototype.isSina = function(){
    return this.u.indexOf('Weibo') !== -1; //是否是新浪微博
  };

  return BrowserEnvdetect;
});
