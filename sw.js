// 一个最简单的 Service Worker，不缓存任何内容，但足以让浏览器认为它是 PWA
self.addEventListener('install', event => {
    console.log('Service Worker installed');
});

self.addEventListener('fetch', event => {
    // 什么都不做，只是为了让浏览器知道有这个 worker
});