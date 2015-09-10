// Set the callback for the install step
self.addEventListener('install', function(event) {
  console.log('install');
});

// 监听fetch事件
self.addEventListener('fetch',function(event){
  var myBlob = 'hello world';
  var init = { "status" : 200 , "statusText" : "SuperSmashingGreat!" }
  var myResponse = new Response(myBlob,init);

  event.respondWith(myResponse);
});