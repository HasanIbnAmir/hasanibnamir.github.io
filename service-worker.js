"use strict";var precacheConfig=[["/index.html","78c3fcf04965fd098c4623a573182011"],["/static/css/main.29c7b3ce.css","4cacd9ffae9ae32dea873044ba0e13cd"],["/static/js/0.0dac3c46.chunk.js","76ab18e5c98e4474b7cfba22b91dc53f"],["/static/js/1.39935fc0.chunk.js","956f1cf05255361f251c46e6871e1c81"],["/static/js/main.45150f8d.js","cf70f93471dffe04c2c3e4b6b4a2a6db"],["/static/media/Agustina.21f233e1.woff","21f233e19402cc4a66866a7f31191f0d"],["/static/media/BiamLogo.3f8158af.jpg","3f8158afe3b1966739b5a6b4f328e253"],["/static/media/ComingSoon.8761e506.jpg","8761e506408309d84676359e1022533d"],["/static/media/Montserrat-Regular.ee653992.ttf","ee6539921d713482b8ccd4d0d23961bb"],["/static/media/cloud1.cc827d04.png","cc827d0475acf32f1321797d834e7f23"],["/static/media/contactMailDark.51cf7192.svg","51cf7192327488da3d2a171280680c16"],["/static/media/developerActivity.59389695.svg","59389695208d7454c6607bed51ed4316"],["/static/media/manOnTable.52be3144.svg","52be31441c8cf8a8a16bd7a228d428bf"],["/static/media/skill.34409398.svg","3440939881da8339d1597e8d77cdf850"],["/static/media/socialEngi.f647e2cd.png","f647e2cdb2b6b52bf10ed3bdd6c2c694"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});