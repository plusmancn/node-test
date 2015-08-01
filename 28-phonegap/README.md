# phoneGap 封装实践

## Debug
[http://docs.phonegap.com/en/edge/guide_next_index.md.html#Debugging](http://docs.phonegap.com/en/edge/guide_next_index.md.html#Debugging)

## html配置
```html
<!-- 安全策略 -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *">

<!-- 引入cordova在所有js文件之前 -->
<script type="text/javascript" src="cordova.js"></script>
```

## icon && 启动屏幕设置
**icon图标生成**  
[http://makeappicon.com/](http://makeappicon.com/)
[TiCons](http://ticons.fokkezb.nl/)  

**设置图标 && splash**
[http://docs.phonegap.com/en/edge/config_ref_images.md.html#Icons%20and%20Splash%20Screens](http://docs.phonegap.com/en/edge/config_ref_images.md.html#Icons%20and%20Splash%20Screens)


## 苹果下status bar问题
```shell
cordova plugin remove org.apache.cordova.device
cordova plugin add org.apache.cordova.device
cordova plugin remove org.apache.cordova.statusbar
cordova plugin add org.apache.cordova.statusbar
```
然后在config文件下配置如下
```xml
<platform name="ios">
  <preference name="StatusBarOverlaysWebView" value="false" /> 
  <preference name="StatusBarBackgroundColor" value="#ffc900" />
  <preference name="StatusBarStyle" value="lightcontent" />
</platform>
```

[PhoneGap Developer’s Guide to the iOS Status Bar](http://devgirl.org/2014/07/31/phonegap-developers-guid/)
[Navbar is under the Status bar on ios simulator](http://forum.ionicframework.com/t/navbar-is-under-the-status-bar-on-ios-simulator/187)

## 获取摄像头
安装插件 [org.apache.cordova.camera](http://plugins.cordova.io/#/package/org.apache.cordova.camera)

## 存储实现，用于保存用户信息
**利用store存储用户信息**
https://github.com/marcuswestin/store.js


## 写一个丑陋的gulp打包插件吧 X 并不需要
如果非要写，可以参考，[Writing a plugin](https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md)
**简单稳定做法**  
在原项目建立一个phoneGap专用的入口文件，然后更改content src配置如下
```html
<content src="index_phonegap.html" />
```



