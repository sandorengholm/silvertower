const OFFLINE_CACHE = 'silvertower';

const FILES = [
	'/index.html',
	'/main.js',
	'/polyfills.js',
	'/runtime.js',
	'/styles.css',
	'/assets/favicon.png'
];

for (let i = 1; i <= 90; i++) {
    FILES.push(`/assets/passages/${i}.jpg`);
}

self.addEventListener('install', event => {
	//We'll wait until all the listed files are added to the cachestorage at the specified location
	event.waitUntil(
		caches.open(OFFLINE_CACHE)
		.then(cache => {
			return cache.addAll(FILES)
				.then(() => self.skipWaiting());
		})
	);
});

self.addEventListener('activate', event => {
	// Delete old asset caches.
	event.waitUntil(
		caches.keys().then(function(keys) {
			return Promise.all(
				keys.map(function(key) {
					if (key != OFFLINE_CACHE) {
						return caches.delete(key);
					}
				})
			);
		})
	);
});

self.addEventListener('fetch', event => {
	if (event.request.mode === 'navigate') {
		event.respondWith(
			caches.match('/index.html').then(r => r ||  fetch(event.request))
		);
	} else {
		event.respondWith(
			caches.match(event.request).then(r => r || fetch(event.request))
		);
	}
});