/* Ranker's Masterbooks — service worker (offline shell).
   Runtime stale-while-revalidate cache for same-origin assets + KaTeX/fonts CDNs.
   Scope: the site root (registered from each book as ../sw.js). */
const CACHE = 'rmb-v1';
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
  const ok = url.origin === self.location.origin || /(^|\.)jsdelivr\.net$|(^|\.)googleapis\.com$|(^|\.)gstatic\.com$/.test(url.host);
  if (!ok) return;
  e.respondWith((async function () {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(req);
    const network = fetch(req).then(function (r) { if (r && (r.ok || r.type === 'opaque')) cache.put(req, r.clone()); return r; }).catch(function () { return null; });
    return cached || (await network) || new Response('', { status: 504, statusText: 'offline' });
  })());
});
