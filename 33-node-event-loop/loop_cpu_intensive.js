#!/usr/bin/env node
function loop_cpu_intensive(callback){
  var count = 1e9;
  while(count--){};
  console.log(process.env.NODE_CHANNEL_FD);
  callback();
}


loop_cpu_intensive(function(){});