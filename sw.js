const CACHE='blade-of-vengeance-v3';
const SHELL=['./','./index.html','./manifest.webmanifest','./icon.svg'];
const THREE_URL='https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js';
self.addEventListener('install',event=>event.waitUntil((async()=>{const c=await caches.open(CACHE);await c.addAll(SHELL);try{const r=await fetch(THREE_URL,{mode:'cors'});if(r.ok)await c.put(THREE_URL,r)}catch(e){}await self.skipWaiting()})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const k of await caches.keys())if(k!==CACHE)await caches.delete(k);await self.clients.claim()})()));
self.addEventListener('fetch',event=>{const u=new URL(event.request.url);if(event.request.method!=='GET')return;
 if(u.href===THREE_URL){event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request)));return}
 if(u.origin===location.origin){event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(event.request,copy))}return res}).catch(()=>caches.match('./index.html'))))}
});