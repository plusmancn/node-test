var Benchmark = require('benchmark');
var request = require('request');


var suite = new Benchmark.Suite;

// add tests
suite.add('Server#cluster', function(deferred) {
  request.get('http://127.0.0.1:8000/',function(error,response,body){
    if (!error && response.statusCode == 200) {
      deferred.resolve();
    }
  });
},{
  defer:true
})
.add('Server#single', function(deferred) {
  request.get('http://127.0.0.1:9000/',function(error,response,body){
    if (!error && response.statusCode == 200) {
      deferred.resolve();
    }
  });
},{
  defer:true
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
// run async
.run({ 'async': true });

// 利用ab测试
// ab -c 4 -n 50 http://127.0.0.1:9000/
// ab -c 4 -n 50 http://127.0.0.1:9000/
// ab -c 4 -n 50 http://127.0.0.1:8000/
// ab -c 4 -n 50 http://sentry.plusman.cn:8000/
// 看cpu核数，性能会有相应提升 ？提升真实内核数目的倍数，虚拟的无效