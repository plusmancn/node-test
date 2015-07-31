# phoneGap 封装实践

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
  <preference name="StatusBarBackgroundColor" value="#E8C577" />
  <preference name="StatusBarStyle" value="lightcontent" />
</platform>
```

[PhoneGap Developer’s Guide to the iOS Status Bar](http://devgirl.org/2014/07/31/phonegap-developers-guid/)
[Navbar is under the Status bar on ios simulator](http://forum.ionicframework.com/t/navbar-is-under-the-status-bar-on-ios-simulator/187)

## 