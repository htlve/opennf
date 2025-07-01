self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('opennefia-cache').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './styles.css',
        './love.js',
        './love.wasm',
        './opennefia.love',
        './keyboard.js'
      ]);
    })
  );
});