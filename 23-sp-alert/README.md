# 简易弹框 spAlert
## 调用示例
```
spAlert('这是标题','这是正文',function(){
    // 用户按了确认后的回调函数
    // do something
});
```

## js部分，函数方法挂载到全局
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

## css部分，部分代码参考遮罩实现
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
