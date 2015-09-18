function humanMemoryUsage(){
  var usage = process.memoryUsage();
  for(var key in usage){
    usage[key] = (+usage[key] / 1e6 ) + 'M';
  }
  return JSON.stringify(usage);
}

console.log('初始化内存：' + humanMemoryUsage());

var array15w = [];
for(var i = 0;i<1.5e5 ;i++){
  (function(i){
    array15w.push(function(){
      console.log(i);
    })
  })(i);
}

console.log('入栈后内存：' + humanMemoryUsage());
// 受到系统内存限制，buffer如何超出了内存堆，剩下的去哪分配了
var count = 20;
var total = [];
function useMem(){
  var size = 200 * 1024 * 1024;
  var buffer = new Buffer(size);
  for(var i=0 ;i<size ;i++){
    buffer[i] = 0;
  }
  total.push(buffer);
  console.log('buffer新建后内存：' + humanMemoryUsage());
  if (count--) {
    useMem();
  };
}
useMem();