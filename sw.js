self.addEventListener('push', function(event) {
    const opts = {
        body: event.data ? event.data.text() : 'Данные синхронизированы',
        icon: 'https://cdn-icons-png.flaticon.com/512/179/179386.png'
    };
    event.waitUntil(self.registration.showNotification('Внимание', opts));
});

// Нужно для активации
self.addEventListener('install', () => self.skipWaiting());
