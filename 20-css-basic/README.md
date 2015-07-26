## css 单行显示省略号
```csss
.line {
  /*点号显示未显示部分*/
  text-overflow: ellipsis;
  /*禁用换行*/
  white-space: nowrap;
  /*超出部分隐藏*/
  overflow:hidden;
}
```
参考：[CSS 单行溢出文本显示省略号...的方法（兼容IE FF）](http://www.cnblogs.com/hlz789456123/archive/2009/02/18/1392972.html)


## 遮罩实现
```css
/**
 * 提醒遮罩层实现
 */
.wx-overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  background:url('./black_0dot_6.png') repeat;
  top: 0px;
  left: 0px;
  z-index: 9999;
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


## 选择器
### 奇偶选择器
```css
:nth-child(odd)
:nth-child(even)
```

### 选择第几个元素之后的元素
```css
:nth-child(n+5)
```
参考链接：[CSS3 选择器——伪类选择器](http://www.w3cplus.com/css3/pseudo-class-selector)


## display inline inline-block inline-table block 属性

## flex布局
[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
[图解CSS3 Flexbox属性](http://www.w3cplus.com/css3/a-visual-guide-to-css3-flexbox-properties.html)

## box-shadow 属性
```css
box-shadow:2px 2px 3px #aaaaaa;
```
[CSS3 box-shadow 属性](http://www.w3school.com.cn/cssref/pr_box-shadow.asp)


## position 类型和区别
[W3cschool CSS position 属性](http://www.w3school.com.cn/cssref/pr_class_position.asp)


## 减少reflow次数
![reflow-chart](https://developers.google.com/speed/images/reflow-chart.png)
[Minimizing browser reflow](https://developers.google.com/speed/articles/reflow?csw=1)

## 元素宽高度指定失效的情况

```css
/* 宽度失效，浏览器会根据内容长度来确定元素宽度 */
.case1 {
  float: left|right;
}

/* 宽度和高度都失效，使用inline-block可以自定义设置长宽 */
.case2 {
  display: inline; 
}
```