const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/login-BNCTvUda.js","assets/login-CMk0Zeaa.css","assets/register-YqdrkK0w.js","assets/feed-gH259DJ8.js","assets/read-D7qq732q.js","assets/authGuard-DoZLjNDn.js","assets/feed-Ce6-uFp0.css","assets/postEdit-Bm2S3dlp.js","assets/postCreate-GzjrmsRB.js","assets/profile-CXWJ2E_r.js","assets/read-DVQmkAcA.js","assets/profile-onG6eF-V.css","assets/viewPost-PLzNZ0tc.js","assets/viewPost-D2osD9_g.css","assets/usersProfile-B4nupWMY.js"])))=>i.map(i=>d[i]);
(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const w="modulepreload",g=function(a){return"/fed2-js2-ca-FransoArbela/"+a},h={},s=function(o,n,u){let t=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=i?.nonce||i?.getAttribute("nonce");t=Promise.allSettled(n.map(c=>{if(c=g(c),c in h)return;h[c]=!0;const m=c.endsWith(".css"),_=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${_}`))return;const f=document.createElement("link");if(f.rel=m?"stylesheet":w,m||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),m)return new Promise(($,b)=>{f.addEventListener("load",$),f.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return t.then(i=>{for(const l of i||[])l.status==="rejected"&&r(l.reason);return o().catch(r)})},L="6c253408-d97b-44b3-af01-faab12978a1d",E="https://v2.api.noroff.dev",d=`${E}/social`,A=`${d}/posts`,y=`${d}/profiles`,e="/fed2-js2-ca-FransoArbela/";console.log(e);async function v(a=window.location.pathname){switch(a){case`${e}`:case`${e}index.html`:await s(()=>import("./home-p4cRUjxN.js"),[]);break;case`${e}auth/login.html`:await s(()=>import("./login-BNCTvUda.js"),__vite__mapDeps([0,1]));break;case`${e}auth/register.html`:await s(()=>import("./register-YqdrkK0w.js"),__vite__mapDeps([2,1]));break;case`${e}posts/feed.html`:await s(()=>import("./feed-gH259DJ8.js"),__vite__mapDeps([3,4,5,6]));break;case`${e}posts/edit.html`:await s(()=>import("./postEdit-Bm2S3dlp.js"),__vite__mapDeps([7,5]));break;case`${e}posts/create.html`:await s(()=>import("./postCreate-GzjrmsRB.js"),__vite__mapDeps([8,5]));break;case`${e}profile/me.html`:await s(()=>import("./profile-CXWJ2E_r.js"),__vite__mapDeps([9,10,4,5,11]));break;case`${e}posts/view.html`:await s(()=>import("./viewPost-PLzNZ0tc.js"),__vite__mapDeps([12,5,4,10,13]));break;case`${e}profile/user.html`:await s(()=>import("./usersProfile-B4nupWMY.js"),__vite__mapDeps([14,10,5,4,11]));break;default:await s(()=>import("./notFound-BNXFWLKC.js"),[])}}function P(){const a=localStorage.getItem("token"),o=window.location.pathname;a&&(o===`${e}`||o===`${e}auth/login.html`||o===`${e}auth/register.html`)&&(window.location.href=`${e}profile/me.html`)}async function p(){if(document.getElementById("navigation-bar"))return;const a=window.location.pathname;console.log(a);let o="";switch(a){case`${e}posts/feed.html`:o=`
        <a href="${e}posts/feed.html">Home</a>
        <a href="${e}profile/me.html">Profile</a>
        <a href="${e}profile.html">+</a>
        <a href="${e}profile.html">Search</a>
        <a id="logout-button" href="">Log out</a>`;break;case`${e}profile/me.html`:o=`
        <a href="${e}posts/feed.html">Home</a>
        <a href="${e}profile/me.html">Profile</a>
        <a href="${e}profile.html">+</a>
        <a href="${e}profile.html">Search</a>
        <a id="logout-button" href="">Log out</a>`;break;case`${e}posts/view.html`:o=`
        <a href="${e}posts/feed.html">Home</a>
        <a href="${e}profile/me.html">Profile</a>
        <a href="${e}profile.html">+</a>
        <a href="${e}profile.html">Search</a>
        <a id="logout-button" href="">Log out</a>`;break;case`${e}profile/user.html`:o=`
        <a href="${e}posts/feed.html">Home</a>
        <a href="${e}profile/me.html">Profile</a>
        <a href="${e}profile.html">+</a>
        <a href="${e}profile.html">Search</a>
        <a id="logout-button" href="">Log out</a>`;break;default:o=`
      `}const n=document.createElement("nav");n.id="navigation-bar",n.className="p-4 bg-gray-900 text-white flex items-center justify-between fixed bottom-0 w-full",n.innerHTML=`
    <div class="bg-red-900 text-white w-full max-w-screen-lg flex items-center justify-between m-auto">
      <div class="flex items-center gap-4 bg-blue-300 w-fit m-auto">
        ${o}
      </div>
    </div>
  `,document.body.appendChild(n)}(async()=>{try{await v(window.location.pathname)}catch(a){console.error("Error in router:",a)}})();P();p();p();export{E as A,e as B,p as a,y as b,L as c,A as d,P as l};
