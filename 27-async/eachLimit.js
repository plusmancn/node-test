var async = require('async');
console.time('st');
async.eachLimit([0,1,2,3,4,5,6,7,8,9],2,function(item,callback){
  setTimeout(function(){
    callback();
  },200);
},function(err){
  console.timeEnd('st');
  console.log(err);
});





orders.findByStatus  分类获取
orders.getByCode  通过订单编号获取

dashboard.monitor.souche.com