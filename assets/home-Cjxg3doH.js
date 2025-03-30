const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./login-rtD4gvRH.js","./constants-2sVKtVoG.js","./login-CMk0Zeaa.css","./register-D_6Ft0jV.js","./feed-BPHmDh3o.js","./read-0dNlfVxd.js","./authGuard-OOVH_Tj-.js","./feed-Ce6-uFp0.css","./postEdit-Cm3iccsp.js","./postCreate-LXqMXl7-.js","./profile-apTCDMP7.js","./read-CmSSu15i.js","./profile-onG6eF-V.css","./viewPost-BRpAD42X.js","./viewPost-D2osD9_g.css","./usersProfile-D01QDDGy.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&m(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const w="modulepreload",b=function(o,e){return new URL(o,e).href},p={},i=function(e,s,m){let t=Promise.resolve();if(s&&s.length>0){const a=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),d=n?.nonce||n?.getAttribute("nonce");t=Promise.allSettled(s.map(l=>{if(l=b(l,m),l in p)return;p[l]=!0;const f=l.endsWith(".css"),g=f?'[rel="stylesheet"]':"";if(!!m)for(let u=a.length-1;u>=0;u--){const h=a[u];if(h.href===l&&(!f||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${g}`))return;const c=document.createElement("link");if(c.rel=f?"stylesheet":w,f||(c.as="script"),c.crossOrigin="",c.href=l,d&&c.setAttribute("nonce",d),document.head.appendChild(c),f)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=a,window.dispatchEvent(n),!n.defaultPrevented)throw a}return t.then(a=>{for(const n of a||[])n.status==="rejected"&&r(n.reason);return e().catch(r)})};async function v(o=window.location.pathname){switch(o){case"/":case"/index.html":await i(()=>Promise.resolve().then(()=>y),void 0,import.meta.url);break;case"/auth/login.html":await i(()=>import("./login-rtD4gvRH.js"),__vite__mapDeps([0,1,2]),import.meta.url);break;case"/auth/register.html":await i(()=>import("./register-D_6Ft0jV.js"),__vite__mapDeps([3,2]),import.meta.url);break;case"/posts/feed.html":await i(()=>import("./feed-BPHmDh3o.js"),__vite__mapDeps([4,5,1,6,7]),import.meta.url);break;case"/posts/edit.html":await i(()=>import("./postEdit-Cm3iccsp.js"),__vite__mapDeps([8,6]),import.meta.url);break;case"/posts/create.html":await i(()=>import("./postCreate-LXqMXl7-.js"),__vite__mapDeps([9,6]),import.meta.url);break;case"/profile/me.html":await i(()=>import("./profile-apTCDMP7.js"),__vite__mapDeps([10,11,1,5,6,12]),import.meta.url);break;case"/posts/view.html":await i(()=>import("./viewPost-BRpAD42X.js"),__vite__mapDeps([13,6,5,1,11,14]),import.meta.url);break;case"/profile/user.html":await i(()=>import("./usersProfile-D01QDDGy.js"),__vite__mapDeps([15,11,1,6,5,12]),import.meta.url);break;default:await i(()=>import("./notFound-BNXFWLKC.js"),[],import.meta.url)}}function E(){const o=localStorage.getItem("token"),e=window.location.pathname;o&&(e==="/"||e==="/auth/login.html"||e==="/auth/register.html")&&(window.location.href="/profile/me.html")}async function _(){if(document.getElementById("navigation-bar"))return;const o=window.location.pathname;console.log(o);let e="";switch(o){case"/posts/feed.html":e=`
        <a href="posts/feed.html">Home</a>
        <a href="/profile/me.html">Profile</a>
        <a href="/profile.html">+</a>
        <a href="/profile.html">Search</a>
        <a id="logout-button" href="">Log out</a>`;break;case"/profile/me.html":e=`
        <a href="/posts/feed.html">Home</a>
        <a href="/profile/me.html">Profile</a>
        <a href="/profile.html">+</a>
        <a href="/profile.html">Search</a>
        <a id="logout-button" href="">Log out</a>`;break;case"/posts/view.html":e=`
        <a href="/posts/feed.html">Home</a>
        <a href="/profile/me.html">Profile</a>
        <a href="/profile.html">+</a>
        <a href="/profile.html">Search</a>
        <a id="logout-button" href="">Log out</a>`;break;case"/profile/user.html":e=`
        <a href="/posts/feed.html">Home</a>
        <a href="/profile/me.html">Profile</a>
        <a href="/profile.html">+</a>
        <a href="/profile.html">Search</a>
        <a id="logout-button" href="">Log out</a>`;break;default:e=`
      `}const s=document.createElement("div");s.innerHTML=`
    <nav id="navigation-bar" class="p-4 bg-gray-900 text-white flex items-center justify-between fixed bottom-0 w-full">

      <div class="bg-red-900 text-white w-full max-w-screen-lg flex items-center justify-between m-auto">
        <div class="flex items-center gap-4 bg-blue-300 w-fit m-auto">
         ${e}
        </div>
      </div>
    </nav>
  `,document.body.appendChild(s)}(async()=>{try{await v(window.location.pathname)}catch(o){console.error("Error in router:",o)}})();E();_();_();const y=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{E as a,_ as l};
