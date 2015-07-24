# jquery 表单数据初始化插件
## Install
```html
<!-- querystring解析库 -->
<script type="text/javascript" src="path-to/querystring"></script>
<!-- 加载插件 -->
<script type="text/javascript" src="path-to/jquery.bindData.js"></script>
```

## Usage
```javascript
$('#form1').bindData({
  data:{
    "code": "1",
    "fillsex": "2",
    "fillage": "3",
    "fillos": "2",
    "filloccupation": "0",
    "fillroles": [
      "8",
      "9"
    ]
  }, // query 标准解析后的输出
  parentActive:'active' // 如果当前input被选中，此父类显示的css类属性
});
```