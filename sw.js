self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

// Keeps sign-ins live while meeting Chrome's PWA install requirement
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() =>
      new Response("You appear to be offline. Please check your internet connection and reload.", {
        headers: { "Content-Type": "text/plain" }
      })
    )
  );
});