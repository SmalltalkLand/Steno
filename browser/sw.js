addEventListener('fetch',evt => {
    evt.waitUntil(async () => {
        if(evt.request.url.startsWith('/w/fs/')){
            let ns = evt.request.url.slice(6);
            evt.respondWith(new Response(/*not working yet*/));
            return;
        }
        evt.respondWith(fetch(evt.request))
    })
})