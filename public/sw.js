if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const r=e=>a(e,t),d={module:{uri:t},exports:n,require:r};s[t]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(i(...e),n)))}}define(["./workbox-946f13af"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/138.d625faee1035eaaf.js",revision:"d625faee1035eaaf"},{url:"/_next/static/chunks/266.197bef9a7c97b187.js",revision:"197bef9a7c97b187"},{url:"/_next/static/chunks/302.a8080e61e5e2b31b.js",revision:"a8080e61e5e2b31b"},{url:"/_next/static/chunks/331-53a93b8c2fdad37d.js",revision:"53a93b8c2fdad37d"},{url:"/_next/static/chunks/332.83a984831aea95ed.js",revision:"83a984831aea95ed"},{url:"/_next/static/chunks/377.2a234f0cdacf7a1f.js",revision:"2a234f0cdacf7a1f"},{url:"/_next/static/chunks/42.9e49ea45b4575f96.js",revision:"9e49ea45b4575f96"},{url:"/_next/static/chunks/457.c8ee7adafcf4d98c.js",revision:"c8ee7adafcf4d98c"},{url:"/_next/static/chunks/499.66730ae704441b6e.js",revision:"66730ae704441b6e"},{url:"/_next/static/chunks/516-77d43e89b0682b2b.js",revision:"77d43e89b0682b2b"},{url:"/_next/static/chunks/545.28cb5bda03e4aee2.js",revision:"28cb5bda03e4aee2"},{url:"/_next/static/chunks/546.f1741721287c9c8c.js",revision:"f1741721287c9c8c"},{url:"/_next/static/chunks/560.31cdd657d9bca58e.js",revision:"31cdd657d9bca58e"},{url:"/_next/static/chunks/648.21fa182a4a23741b.js",revision:"21fa182a4a23741b"},{url:"/_next/static/chunks/664-66fa3cecf1c21497.js",revision:"66fa3cecf1c21497"},{url:"/_next/static/chunks/675-388ddd8cc2c00568.js",revision:"388ddd8cc2c00568"},{url:"/_next/static/chunks/779.aca658105f18e0a0.js",revision:"aca658105f18e0a0"},{url:"/_next/static/chunks/870.10226048e5f42c3b.js",revision:"10226048e5f42c3b"},{url:"/_next/static/chunks/962-92ad5e988686b685.js",revision:"92ad5e988686b685"},{url:"/_next/static/chunks/987-2b16bbe89da8928b.js",revision:"2b16bbe89da8928b"},{url:"/_next/static/chunks/framework-0ba0ddd33199226d.js",revision:"0ba0ddd33199226d"},{url:"/_next/static/chunks/main-b18269bc0ac9ed9d.js",revision:"b18269bc0ac9ed9d"},{url:"/_next/static/chunks/pages/404-882cf279048782d0.js",revision:"882cf279048782d0"},{url:"/_next/static/chunks/pages/_app-14cd3a175cbaeab4.js",revision:"14cd3a175cbaeab4"},{url:"/_next/static/chunks/pages/_error-effe22be6ff34abe.js",revision:"effe22be6ff34abe"},{url:"/_next/static/chunks/pages/index-6465d69b3dfeb88d.js",revision:"6465d69b3dfeb88d"},{url:"/_next/static/chunks/pages/liquidity-position-45ca02f691906c3a.js",revision:"45ca02f691906c3a"},{url:"/_next/static/chunks/pages/swap-7e08648dde8533a8.js",revision:"7e08648dde8533a8"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-4676b834097672c4.js",revision:"4676b834097672c4"},{url:"/_next/static/css/04619577e0bddcc4.css",revision:"04619577e0bddcc4"},{url:"/_next/static/kcHBgImaRsaY_GSZBftbj/_buildManifest.js",revision:"140786da946aef12067ac509b0a41288"},{url:"/_next/static/kcHBgImaRsaY_GSZBftbj/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/404-dark.88f7f707.svg",revision:"9946c2eac18c520941269bc63fe32c8f"},{url:"/_next/static/media/404-light.8463008b.svg",revision:"32787d88d42a468cc153117f015eaa09"},{url:"/_next/static/media/author.67e99d23.jpg",revision:"3094dd694f05fb77263bbb29593cb119"},{url:"/_next/static/media/collection-1.2655e340.jpg",revision:"fdb05a61a09c62a7f68b18c97566f6a2"},{url:"/_next/static/media/collection-2.89da124f.jpg",revision:"9de3f89c9d9830cbd76dc0c8b5bb21e8"},{url:"/_next/static/media/collection-3.4e0f5e37.jpg",revision:"34cfc9e1a7bbd81acedc92e2f2fa76f4"},{url:"/_next/static/media/collection-4.5ddfe301.jpg",revision:"5d999d5bd8bd89fb141ca5592a830790"},{url:"/_next/static/media/logo-icon-white.fcad1186.svg",revision:"1914e8003c304829866f9d21156ef175"},{url:"/_next/static/media/logo-icon.590d10e4.svg",revision:"62dc7f43d9856429cd65a4c851d4dfe2"},{url:"/_next/static/media/logo.590d10e4.svg",revision:"62dc7f43d9856429cd65a4c851d4dfe2"},{url:"/_next/static/media/metamask.3285bae2.svg",revision:"c879a582a94e772b8ed27295ae83145d"},{url:"/_next/static/media/nucal-logo.e3a669b4.svg",revision:"e56f1c2867e5e30b9f0bbe66e1814059"},{url:"/_next/static/media/sidebar-shape.47682628.png",revision:"37b78881442d4d1560b80a4c79cd372b"},{url:"/favicon.ico",revision:"f71078cabc737821880809764083689b"},{url:"/favicon_.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
