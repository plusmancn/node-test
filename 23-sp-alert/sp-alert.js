;(function(){

  /**
   * 弹框插件
   */
  function spAlert(header,body,callback){
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

    // 关闭遮罩
    function clearSpAlert(){
      E.parentElement.removeChild(E);
    }

    // 事件绑定
    var haoDe = E.getElementsByTagName('button')[0];
    haoDe.addEventListener('click',clearSpAlert,false);

    // 如果存在回掉事件，则绑定
    if (callback) {
      haoDe.addEventListener('click',callback,false);
    }

    document.body.appendChild(E);
  }

  window.spAlert = spAlert;
  
})();
