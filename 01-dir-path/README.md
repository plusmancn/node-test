## 结论
* node.js内部文件的引用关系，都是基于 __dirname的；  

## 困惑 process.cwd
process.cwd 指向命令调用者所在的目录。但是，类似gm之类的库，会给人造成迷惑，以为内部文件的引用关系是基于process.cwd的。  
造成这种假象的原因是因为类似gm之类的类库，他拼接各种参数后最后输出了一段shell命令，然后获取shell命令的返回结果。

---

**示例** 

目录结构
```text
.
├── fonts
│   ├── Bariol.otf
│   ├── DIN.otf
│   ├── klxy.ttf
│   ├── kx.otf
│   └── LiHei\ Pro.ttf*
├── lib
│   ├── avatar_generate_gm.js*
│   ├── env
│   └── file_upload.js
├── LICENSE
├── node_modules
│   ├── canvas
│   ├── gm
│   └── qiniu
├── package.json
├── README.md
└── server.js*
```


avatar_generate_gm.js内的getImageBuffer
```javascript
/**
 * @description 生成字体图片
 */
module.exports.getImageBuffer = function(character,callback){
  // 根据字符类型，确定间距
  var pX = character.charCodeAt() < 128 ? 43:25;

  // creating an image
  gm(150,150,"#ECF5FD")
  .fill('#84BDFD')
  .font('./fonts/LiHei Pro.ttf',100) // 注意此处的字体引用位置关系
  .drawText(pX, 110, character)
  .toBuffer("PNG",function(err,buffer){
    if (callback) {
      callback(err,buffer);
    }
  });
};

```
最后在，server.js内调用getImageBuffer方法，字体文件的引用关系是相对于“调度者”所在的位置 。  
这是由于linux shell命令的执行，获取文件的位置相对关系是参照于命令执行位置的的（bash 内的`pwd`，node内的`process.cwd` ）   

## todo 
需要添加一个shell脚本说明

