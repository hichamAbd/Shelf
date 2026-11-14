// Offline support. The network is tried first so a changed list shows up
// at once; the saved copy is used when there is no connection.
// The cache name starts with "shelf-" because every app on this web
// address shares the same browser storage.
const CACHE = "shelf-v3";

const FILES = [
  "./",
  "index.html",
  "css/app.css",
  "js/app.js",
  "js/apps.js",
  "manifest.webmanifest",
  "icons/icon.svg",
  "icons/icon-192.png",
  "icons/apple-touch-icon.png",
  "icons/apps/tally.svg",
  "icons/apps/nanter.svg",
  "icons/apps/scanner.svg",
  "icons/apps/stripper.svg",
  "icons/apps/zikr-ring.svg",
  "icons/apps/reel-riot.png",
  "icons/apps/vibecheck.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(FILES)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => key.startsWith("shelf-") && key !== CACHE).map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (!url.pathname.startsWith(new URL("./", self.location).pathname)) return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(() =>
        caches.match(request, { ignoreSearch: true }).then((saved) => saved || caches.match("index.html"))
      )
  );
});
