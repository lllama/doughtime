(function(){"use strict"
function e(e,t){return caches.keys().then(function(n){n.forEach(function(n){var s=0===n.indexOf(e),r=n!==t
s&&r&&caches.delete(n)})})}function t(e,t){return!!t.find(function(t){return t.test(decodeURI(e))})}self.CACHE_BUSTER="1528384272737|0.5956128821208453",self.addEventListener("install",function(e){return self.skipWaiting()}),self.addEventListener("activate",function(e){return self.clients.claim()})
var n=["assets/doughtime-402a1d47b678b1b1666c21479feeaa78.css","assets/doughtime-891d5e161166940f685bcc5a142ca611.js","assets/vendor-3040c6541ce433d4b07e837a54da2e06.css","assets/vendor-26eb196bb822b002a7c0c94f4043fecf.js"],s="esw-asset-cache-1",r=n.map(function(e){return new URL(e,self.location).toString()}),i=function(){caches.open(s).then(function(e){return e.keys().then(function(t){t.forEach(function(t){-1===r.indexOf(t.url)&&e.delete(t)})})})}
self.addEventListener("install",function(e){e.waitUntil(caches.open(s).then(function(e){return Promise.all(r.map(function(t){var n=new Request(t,{mode:"cors"})
return fetch(n).then(function(n){if(n.status>=400){var s=new Error("Request for "+t+" failed with status "+n.statusText)
throw s}return e.put(t,n)}).catch(function(e){console.error("Not caching "+t+" due to "+e)})}))}))}),self.addEventListener("activate",function(t){t.waitUntil(Promise.all([e("esw-asset-cache",s),i()]))}),self.addEventListener("fetch",function(e){var t="GET"===e.request.method,n=-1!==r.indexOf(e.request.url)
t&&n&&e.respondWith(caches.match(e.request,{cacheName:s}).then(function(t){return t||fetch(e.request)}))})
var c=[],a=[]
self.INDEX_FILE_HASH="5ebd3a6044300efffc19c1208695f5ce"
var u=this,o=new URL("index.html",self.location).toString()
self.addEventListener("install",function(e){e.waitUntil(fetch(o,{credentials:"include"}).then(function(e){return caches.open("esw-index-1").then(function(t){return t.put(o,e)})}))}),self.addEventListener("activate",function(t){t.waitUntil(e("esw-index","esw-index-1"))}),self.addEventListener("fetch",function(e){var n=e.request,s=new URL(n.url),r="GET"===n.method,i=-1!==n.headers.get("accept").indexOf("text/html"),f=s.origin===location.origin,l=t(n.url,c),d=!a.length||t(n.url,a)
!("/tests"===s.pathname&&!1)&&r&&i&&f&&d&&!l&&e.respondWith(function(){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(caches.match(o,{cacheName:"esw-index-1"}))
case 2:return e.abrupt("return",e.sent)
case 3:case"end":return e.stop()}},null,u)}())})})()
