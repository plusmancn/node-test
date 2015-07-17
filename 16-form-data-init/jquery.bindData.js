/**
 * 表单数据初始化类
 */
;(function($){
  $.fn.bindData = function(opts) {
    var defaults = {
      prefix: "",
      data: {},
      parentActive:''
    };
    var options = $.extend(defaults, opts);
    var bindObj = $(this);

    /**
     * 不完美，类前后至少有一个空格的判断没做
     */
    function removeClass (element,className) {
      element.parentElement.className = element.parentElement.className.replace(className,'');
    }

    function addClass (element,className){
      element.parentElement.className += ' ' + className;
    }

    $.each(options.data, function(key, value) {
      /**
       * 元素查询
       */
      if (options.prefix !== "") {
        key = options.prefix + "." + key;
      }
      key = key.toLowerCase();
      var elements = $(bindObj).find("[name='" + key + "']");
      if ($(elements).length === 0) {
        elements = $(bindObj).find("[id='" + key + "']");
      }
      if ($(elements).length === 0) {
        return true;
      }

      /**
       * 假设前提，同一name类型的表单元素，具有相同的元素类型
       */
      var tagName = (elements[0]).tagName.toLowerCase();

      var type = elements.attr("type");
      if (type === undefined) {
        type = "";
      } else {
        type = type.toLowerCase();
      }

      /**
       * 元素赋值
       */
      if (tagName === "input" && type === "radio") {
        $(elements).each(function(){
          this.value === value ? this.checked = true:this.checked = false;
          this.value === value ? addClass(this,options.parentActive):removeClass(this,options.parentActive);
        });
      } else if (tagName === "input" || tagName === "textarea" || tagName === "select") {
        // 非数组转换为数组
        if (((tagName === "input" && type === "checkbox") || tagName === "select") && typeof(value) === "string") {
          $(elements).val(value.split(","));
        } else {
          // 赋值方式1：通过数组方式赋值
          $(elements).val(value); 
          $(elements).each(function(){
            value.indexOf(this.value) !== -1 ? addClass(this,options.parentActive):removeClass(this,options.parentActive)
          });
        }
      } else {
        $(elements).html(value);
      }
      return true;
    });
  };
})(jQuery);