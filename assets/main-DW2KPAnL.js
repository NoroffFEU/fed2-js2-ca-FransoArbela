const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/login-Cft3-9BH.js","assets/login-CMk0Zeaa.css","assets/register-C03oGOLD.js","assets/feed-F9il4tpP.js","assets/read-XpbEXNG3.js","assets/read-CHNFXflQ.js","assets/authGuard-BjwX1WRu.js","assets/feed-Sul1Z3eo.css","assets/postEdit-DBpWgZi4.js","assets/postCreate-BCCEWkV-.js","assets/profile-BaD9vuw_.js","assets/profile-BUxBsN9C.css","assets/viewPost-BqilPd-n.js","assets/viewPost-Blzu8TT0.css","assets/usersProfile-CUm3NP4-.js"])))=>i.map(i=>d[i]);
(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const g="modulepreload",E=function(a){return"/fed2-js2-ca-FransoArbela/"+a},h={},s=function(r,n,u){let e=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=i?.nonce||i?.getAttribute("nonce");e=Promise.allSettled(n.map(c=>{if(c=E(c),c in h)return;h[c]=!0;const m=c.endsWith(".css"),_=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${_}`))return;const f=document.createElement("link");if(f.rel=m?"stylesheet":g,m||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),m)return new Promise((b,w)=>{f.addEventListener("load",b),f.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return e.then(i=>{for(const l of i||[])l.status==="rejected"&&o(l.reason);return r().catch(o)})},A="6c253408-d97b-44b3-af01-faab12978a1d",v="https://v2.api.noroff.dev",d=`${v}/social`,y=`${d}/posts`,$=`${d}/profiles`,t="/fed2-js2-ca-FransoArbela/";async function P(a=window.location.pathname){switch(a){case`${t}`:case`${t}index.html`:await s(()=>import("./home-CZjQZfyp.js"),[]);break;case`${t}auth/login.html`:await s(()=>import("./login-Cft3-9BH.js"),__vite__mapDeps([0,1]));break;case`${t}auth/register.html`:await s(()=>import("./register-C03oGOLD.js"),__vite__mapDeps([2,1]));break;case`${t}posts/feed.html`:await s(()=>import("./feed-F9il4tpP.js"),__vite__mapDeps([3,4,5,6,7]));break;case`${t}posts/edit.html`:await s(()=>import("./postEdit-DBpWgZi4.js"),__vite__mapDeps([8,6]));break;case`${t}posts/create.html`:await s(()=>import("./postCreate-BCCEWkV-.js"),__vite__mapDeps([9,6]));break;case`${t}profile/me.html`:await s(()=>import("./profile-BaD9vuw_.js"),__vite__mapDeps([10,5,4,6,11]));break;case`${t}posts/view.html`:await s(()=>import("./viewPost-BqilPd-n.js"),__vite__mapDeps([12,6,4,13]));break;case`${t}profile/user.html`:await s(()=>import("./usersProfile-CUm3NP4-.js"),__vite__mapDeps([14,5,6,4,11]));break;default:await s(()=>import("./notFound-BNXFWLKC.js"),[])}}function L(){const a=localStorage.getItem("token"),r=window.location.pathname;a&&(r===`${t}`||r===`${t}auth/login.html`||r===`${t}auth/register.html`)&&(window.location.href=`${t}profile/me.html`)}async function p(){if(document.getElementById("navigation-bar"))return;const a=window.location.pathname;let r="";switch(a){case`${t}posts/feed.html`:r=`
        <a href="../posts/feed.html">Home</a>
        <a href="../profile/me.html">Profile</a>
        <a href="../profile.html">+</a>
        <a href="../profile.html">Search</a>
        <a id="logout-button" href="">Log out</a>`;break;case`${t}profile/me.html`:r=`
        <a href="../posts/feed.html">Home</a>
        <a href="../profile/me.html">Profile</a>
        <a href="../profile.html">+</a>
        <a href="../profile.html">Search</a>
        <a id="logout-button" href="">Log out</a>`;break;case`${t}posts/view.html`:r=`
        <a href="../posts/feed.html">Home</a>
        <a href="../profile/me.html">Profile</a>
        <a href="../profile.html">+</a>
        <a href="../profile.html">Search</a>
        <a id="logout-button" href="">Log out</a>`;break;case`${t}profile/user.html`:r=`
        <a href="../posts/feed.html">Home</a>
        <a href="../profile/me.html">Profile</a>
        <a href="../profile.html">+</a>
        <a href="../profile.html">Search</a>
        <a id="logout-button" href="">Log out</a>`;break;default:r=`
      `}const n=document.createElement("nav");n.id="navigation-bar",n.className="p-4 bg-gray-900 text-white flex items-center justify-between fixed bottom-0 w-full",n.innerHTML=`
    <div class="bg-red-900 text-white w-full max-w-screen-lg flex items-center justify-between m-auto">
      <div class="flex items-center gap-4 bg-blue-300 w-fit m-auto">
        ${r}
      </div>
    </div>
  `,document.body.appendChild(n)}(async()=>{try{await P(window.location.pathname)}catch(a){console.error("Error in router:",a)}})();L();p();p();export{v as A,t as B,p as a,y as b,A as c,$ as d,L as l};
