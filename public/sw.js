const CACHE_NAME = 'konfi-castle-cache-v1';
const urlsToCache = [
  'index.html',
  'KonfiCastleLogo.jpg',
  'CVJM-Landesverband_Bayern_logo.svg.png',
  'manifest.webmanifest',
  '/', // Wichtig, um die Root-URL abzudecken
];

// Installation des Service Workers und Caching der App-Shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache geöffnet');
        // 'reload' erzwingt, dass die Dateien vom Netzwerk geholt werden, nicht aus dem Browser-Cache
        return cache.addAll(urlsToCache.map(url => new Request(url, { cache: 'reload' })));
      })
      .catch(err => {
        console.error('Fehler beim Caching der App-Shell:', err);
      })
  );
});

// Fetch-Event (Anfragen abfangen - Cache-First-Strategie)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache-Treffer - aus dem Cache zurückgeben
        if (response) {
          return response;
        }
        
        // Nicht im Cache - vom Netzwerk holen
        return fetch(event.request).then(
          (response) => {
            // Prüfen, ob wir eine gültige Antwort erhalten haben
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // WICHTIG: Antwort klonen, da sie nur einmal gelesen werden kann.
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});

// Activate-Event (Alte Caches aufräumen)
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Lösche alle Caches, die nicht dem aktuellen CACHE_NAME entsprechen
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});