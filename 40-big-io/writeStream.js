var fs = require('fs');
var ws = fs.createWriteStream('./big.log',{
  flags:'a+'
});

// var isHandle = ws.write(Date() + new Error('This is a Error').stack + '\n\n');

// ws.once('drain',function(err,res){
//   console.log(err,res);
// });

writeOneMillionTimes(ws,Date() + new Error('This is a Error').stack + '\n\n','utf8',function(err,res){
  console.timeEnd('g-b-log Finished in');
});

// Write the data to the supplied writable stream 1MM times.
// Be attentive to back-pressure.
function writeOneMillionTimes(writer, data, encoding, callback) {
  console.time('g-b-log Finished in');
  var i = 1e5;
  var iIn = 0;
  write();
  function write() {
    var ok = true;
    do {
      i -= 1;
      if (i === 0) {
        // last time!
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
        console.log('write at ' + iIn++);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
}

// 平均消耗时间在：3994ms

// 性能提升在 3x