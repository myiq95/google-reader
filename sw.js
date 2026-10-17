const CACHE_NAME = 'premium-reader-v2';
const ASSETS = [
  './index.html',
  './manifest.json',
  './apple-touch-icon.png' // 아이콘 파일이 있을 경우
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});
