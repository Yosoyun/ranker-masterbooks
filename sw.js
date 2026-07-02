/* Ranker's Masterbooks — service worker.
   App files (HTML/JS/CSS/JSON) are NETWORK-FIRST so updates are never stale;
   fonts / KaTeX CDN are cache-first (versioned, safe). Falls back to cache offline.
   Scope: the site root (registered from each book as ../sw.js). */
const CACHE = 'rmb-v20';

self.addEventListener('install', function (e) { self.skipWaiting(); });

self.addEventListener('activate', function (e) {
  e.waitUntil((async function () {
    const keys = await caches.keys();
    await Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', function (e) {
  const req = e.request;
  if (req.method !== 'GET') return;
  let url; try { url = new URL(req.url); } catch (_) { return; }

  const sameOrigin = url.origin === self.location.origin;
  const isCDN = /(^|\.)jsdelivr\.net$|(^|\.)googleapis\.com$|(^|\.)gstatic\.com$/.test(url.host);
  if (!sameOrigin && !isCDN) return;

  // App files: network-first (always fresh when online); fall back to cache offline.
  if (sameOrigin) {
    e.respondWith((async function () {
      const cache = await caches.open(CACHE);
      try {
        const fresh = await fetch(req, { cache: 'no-store' });
        if (fresh && (fresh.ok || fresh.type === 'opaque')) cache.put(req, fresh.clone());
        return fresh;
      } catch (_) {
        const cached = await cache.match(req);
        return cached || new Response('', { status: 504, statusText: 'offline' });
      }
    })());
    return;
  }

  // CDN fonts / KaTeX: cache-first (immutable, versioned).
  e.respondWith((async function () {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(req);
    if (cached) return cached;
    try {
      const fresh = await fetch(req);
      if (fresh && (fresh.ok || fresh.type === 'opaque')) cache.put(req, fresh.clone());
      return fresh;
    } catch (_) {
      return new Response('', { status: 504, statusText: 'offline' });
    }
  })());
});
