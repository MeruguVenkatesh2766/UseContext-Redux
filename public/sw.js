const CACHE_NAME='v1';

const arCache=[
    `/`,
    `/index.html`,
    `/App.js`,
    `/Inc-Dec_Usecontext.js`,
    `/Inc-Dec_Usestate.js`,
    `/logo192.png`,
    '/logo512.png',
    `/favicon.ico`,
    `/static/js/bundle.js`,
    `/manifest.json`,


];

this.addEventListener('install', function(e){
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache)=>{
            return cache.addAll(arCache)
        })
    )
})

this.addEventListener('fetch', function(e){
    if(!navigator.onLine){
        e.respondWith(
            caches.match(e.request)
            .then((response)=>{
                if(response){
                    return response;
                }
            })
        )
    }
})