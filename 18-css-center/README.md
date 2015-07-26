## 已知元素width + height情况下的居中
**absolute|fixed + margin : auto**
```csss
.center {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 100px;
  height: 100px;
}
```

## 未知元素width + height情况下的居中
```css
.center {
  position: absolute|fixed|relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
}
```


## 参考资料
[解读CSS布局之-水平垂直居中](http://f2e.souche.com/blog/jie-du-cssbu-ju-zhi-shui-ping-chui-zhi-ju-zhong/)