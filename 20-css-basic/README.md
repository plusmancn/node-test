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

## 简易弹框
调用示例
```
spAlert('这是标题','这是正文',function(){
    // 用户按了确认后的回调函数
    // do something
});
```

js部分，函数方法挂载到全局
```javascript
/**
 * 弹框插件
 */
function spAlert(header,body,callback){
  // 关闭遮罩
  function clearSpAlert(){
    document.getElementById('alert-overlay').remove();
  }

  // 模板字符串
  var templateString =
    '<div class="div-alert">' +
      '<div class="alert-header">{{header}}</div>' +
      '<div class="alert-body">{{body}}</div>' +
      '<div class="alert-action" ><button type="button">好的</button></div>' +
    '</div>';

  // 输出html
  var outputHtml = templateString.replace(/\{\{(\w+)\}\}/g,function(match,key){
    if (key === 'header') {
      return header;
    }else if (key === 'body') {
      return body;
    }
  });

  // 节点生成
  var E = document.createElement('div');
  E.id = 'alert-overlay';
  E.innerHTML = outputHtml;

  // 事件绑定
  var haoDe = E.getElementsByTagName('button')[0];
  haoDe.addEventListener('click',clearSpAlert,false);

  // 如果存在回调事件，则绑定
  if (callback) {
    haoDe.addEventListener('click',callback,false);
  }

  document.body.appendChild(E);
}

window.spAlert = spAlert;
```

css部分，部分代码参考遮罩实现
```css
/**
 * 弹框css
 */
#alert-overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  background:url('./black_0dot_6.png') repeat;
  top: 0px;
  left: 0px;
  z-index: 9000;
}

#alert-overlay .div-alert {
  text-align: center;
  color: #000;
  background-color: #F1E8E8;
  z-index: 9001;
  margin-left: 10%;
  width: 80%;
  border-radius: 6px;
  margin-top: 40%;
  opacity: 0.88;
}

#alert-overlay .alert-header {
  font-size: 16px;
  padding: 10px;
}

#alert-overlay .alert-body {
  font-size: 13px;
  padding: 10px 5px;
}

#alert-overlay .alert-action {
  margin-top: 10px;
  border-top: 1px solid #ccc;
}

#alert-overlay .alert-action button {
  border: 0px;
  background-color: inherit;
  color: #4F98EC;
  width: 100%;
  padding: 10px;
}

#alert-overlay .alert-action button:active {
  background-color: #eee;
  border-radius: 6px;
}

/***************** END 弹框Css *****************/
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

## box-shadow 属性
```css
box-shadow:2px 2px 3px #aaaaaa;
```
[CSS3 box-shadow 属性](http://www.w3school.com.cn/cssref/pr_box-shadow.asp)


## position 类型和区别
[W3cschool CSS position 属性](http://www.w3school.com.cn/cssref/pr_class_position.asp)
