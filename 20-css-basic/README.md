## css 单行显示省略号
```csss
.line {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow:hidden;
}
```
参考：[CSS 单行溢出文本显示省略号...的方法（兼容IE FF）](http://www.cnblogs.com/hlz789456123/archive/2009/02/18/1392972.html)



## active hover 按钮伪类属性



## 遮罩实现
```css
/**
 * 提醒遮罩层实现
 */
.wx-overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  background:url('../img-dwj/black_0dot_6.png') repeat;
  top: 0px;
  left: 0px;
}

/**
 * 消失和展示
 */
.wx-overlay-hidden {
  display: none!important;
}
```
使用
```html
<!-- 展示 -->
<div class="wx-overlay"></div>
```