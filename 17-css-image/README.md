# css 设置图片背景图片
**background**  
设置顺序为：背景色 图片地址（远程或者和css路径的相对的地址）图片重复方式 background-attachment 背景位置
```css
background: [<background-color>][,<background-image>][,<background-repeat>][,<background-attachment>][,<background-position>] 
```

**background-attachment**  scroll || fixed  
background-attachment 主要是用来设置背景图像是否固定或者随着页面的其余部分滚动，，其默认值为scroll，表示背景图片会随滚动条一起滚动，而取值fixed时，背景图片固定不动。

**background-size**  
可选值：cover（满屏，不一定完整显示图片）, contain（在区域内完整显示图片，不一定满屏）

**前缀含义**
```
-webkit-  webkit  
-moz-     mozilla
-o-       opera presto
没有前缀   W3c标准
```

```css
.bg {
    background: #000 url(scale.jpg) no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
```

**补充**
[CSS3 Background-size](http://www.w3cplus.com/content/css3-background-size/)

# 圆形头像
利用boder-radius属性
```css
.avatar-round {
  height: 60px; 
  width: 60px;
  border-radius: 30px;  /*设置为边长的一半*/
  border:2px solid #fff;
}
```
**boder 更确切的说是 inner-boder**  
boder会向内占据空间
