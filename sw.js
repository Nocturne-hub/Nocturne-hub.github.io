var cacheName = 'ginko-v1';

var icons = ["32", "64", "96", "128", "168", "180", "192", "256", "512"];
var contentToCaches = [];

for(var i=0; i<icons.length; i++) {
  gamesImages.push('icons/icon-'+icons[i]+'.png');
}

var contentToCache = appShellFiles.concat(gamesImages);

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
      caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all: app shell and content');
        return cache.addAll(contentToCache);
      })
    );
  });