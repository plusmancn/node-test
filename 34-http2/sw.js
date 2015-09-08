// The files we want to cache
var urlsToCache = [
  '/',
  './sw.css'
];

// Set the callback for the install step
self.addEventListener('install', function(event) {
  console.log(event);
});

// 坚挺