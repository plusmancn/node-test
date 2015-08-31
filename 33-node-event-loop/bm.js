var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;
var countTotal = 0;

// add tests
suite.add('RegExp#test', function(deferred) {
  setTimeout(function(){
    deferred.resolve();
  },10);
},{
  defer:true
})
.add('String#indexOf', function(deferred) {
  setTimeout(function(){
    deferred.resolve();
  },100);
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