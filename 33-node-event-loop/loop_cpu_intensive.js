#!/usr/bin/env node
function loop_cpu_intensive(callback){
  var count = 1e10;
  while(count--){};
  console.log('loop_cpu_intensive_child_process');
  callback();
}


loop_cpu_intensive(function(){});