
const version         = 'V0.01',
      staticCacheName = `${version}staticfiles`;

addEventListener('install', installEvent => {
  skipWaiting();
  installEvent.waitUntil(
    caches.open(staticCacheNameName)
      .then(staticCache => {
        // Nice to Cache
        staticCache.addAll([
          'about.html',
          '404.html',
          'index.html',
          'notes.html',
          'now.html',
          'work.html',
          'writing.html'
        ]);

        // Need to Cache
        return staticCache.addAll([
          '/assets/css/main.css',
          '/assets/images/navs/1.jpg'
        ]);
      })
  );
});

// For clearing out old caches
addEventListener('activate', activateEvent => {
  activateEvent.waitUntil(
    // Clean the old caches up
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== staticCacheName) {
              // Time to kill!
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => clients.claim())
  );
});

addEventListener('fetch', fetchEvent => {
  const request = fetchEvent.request;
  fetchEvent.respondWith(
    caches.match(request)
      .then(responseFromCache => {
        return responseFromCache || fetch(request);
      })
  );
});
