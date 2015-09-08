// Set the callback for the install step
self.addEventListener('install', function(event) {
  console.log('install');
});

// 监听fetch事件
self.addEventListener('fetch',function(event){
  debugger;
});