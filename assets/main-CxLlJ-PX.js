const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/login-CK3ERC0w.js","assets/login-CMk0Zeaa.css","assets/register-CoLsILCa.js","assets/feed-BFVox7_j.js","assets/read-D4HQD986.js","assets/authGuard-Bjt5wR72.js","assets/feed-Ce6-uFp0.css","assets/postEdit-CJoOzBK5.js","assets/postCreate-DivPgzt_.js","assets/profile-6iixhM1F.js","assets/read-DS3dLQ0n.js","assets/profile-onG6eF-V.css","assets/viewPost-fuF_M1G-.js","assets/viewPost-D2osD9_g.css","assets/usersProfile-CL7-RGyu.js"])))=>i.map(i=>d[i]);
(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const w="modulepreload",g=function(a){return"/fed2-js2-ca-FransoArbela/"+a},h={},s=function(r,n,u){let t=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=i?.nonce||i?.getAttribute("nonce");t=Promise.allSettled(n.map(c=>{if(c=g(c),c in h)return;h[c]=!0;const m=c.endsWith(".css"),_=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${_}`))return;const f=document.createElement("link");if(f.rel=m?"stylesheet":w,m||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),m)return new Promise(($,b)=>{f.addEventListener("load",$),f.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return t.then(i=>{for(const l of i||[])l.status==="rejected"&&o(l.reason);return r().catch(o)})},L="6c253408-d97b-44b3-af01-faab12978a1d",E="https://v2.api.noroff.dev",d=`${E}/social`,A=`${d}/posts`,y=`${d}/profiles`,e="/fed2-js2-ca-FransoArbela/";console.log(e);async function v(a=window.location.pathname){switch(a){case`${e}`:case`${e}index.html`:await s(()=>import("./home-p4cRUjxN.js"),[]);break;case`${e}auth/login.html`:await s(()=>import("./login-CK3ERC0w.js"),__vite__mapDeps([0,1]));break;case`${e}auth/register.html`:await s(()=>import("./register-CoLsILCa.js"),__vite__mapDeps([2,1]));break;case`${e}posts/feed.html`:await s(()=>import("./feed-BFVox7_j.js"),__vite__mapDeps([3,4,5,6]));break;case`${e}posts/edit.html`:await s(()=>import("./postEdit-CJoOzBK5.js"),__vite__mapDeps([7,5]));break;case`${e}posts/create.html`:await s(()=>import("./postCreate-DivPgzt_.js"),__vite__mapDeps([8,5]));break;case`${e}profile/me.html`:await s(()=>import("./profile-6iixhM1F.js"),__vite__mapDeps([9,10,4,5,11]));break;case`${e}posts/view.html`:await s(()=>import("./viewPost-fuF_M1G-.js"),__vite__mapDeps([12,5,4,10,13]));break;case`${e}profile/user.html`:await s(()=>import("./usersProfile-CL7-RGyu.js"),__vite__mapDeps([14,10,5,4,11]));break;default:await s(()=>import("./notFound-BNXFWLKC.js"),[])}}function P(){const a=localStorage.getItem("token"),r=window.location.pathname;a&&(r===`${e}`||r===`${e}auth/login.html`||r===`${e}auth/register.html`)&&(window.location.href=`${e}profile/me.html`)}async function p(){if(document.getElementById("navigation-bar"))return;const a=window.location.pathname;let r="";switch(a){case`${e}posts/feed.html`:r=`
        <a href="${e}posts/feed.html">Home</a>
        <a href="${e}profile/me.html">Profile</a>
        <a href="${e}profile.html">+</a>
        <a href="${e}profile.html">Search</a>
        <a id="logout-button" href="">Log out</a>`;break;case`${e}profile/me.html`:r=`
        <a href="${e}posts/feed.html">Home</a>
        <a href="${e}profile/me.html">Profile</a>
        <a href="${e}profile.html">+</a>
        <a href="${e}profile.html">Search</a>
        <a id="logout-button" href="">Log out</a>`;break;case`${e}posts/view.html`:r=`
        <a href="${e}posts/feed.html">Home</a>
        <a href="${e}profile/me.html">Profile</a>
        <a href="${e}profile.html">+</a>
        <a href="${e}profile.html">Search</a>
        <a id="logout-button" href="">Log out</a>`;break;case`${e}profile/user.html`:r=`
        <a href="${e}posts/feed.html">Home</a>
        <a href="${e}profile/me.html">Profile</a>
        <a href="${e}profile.html">+</a>
        <a href="${e}profile.html">Search</a>
        <a id="logout-button" href="">Log out</a>`;break;default:r=`
      `}const n=document.createElement("nav");n.id="navigation-bar",n.className="p-4 bg-gray-900 text-white flex items-center justify-between fixed bottom-0 w-full",n.innerHTML=`
    <div class="bg-red-900 text-white w-full max-w-screen-lg flex items-center justify-between m-auto">
      <div class="flex items-center gap-4 bg-blue-300 w-fit m-auto">
        ${r}
      </div>
    </div>
  `,document.body.appendChild(n)}(async()=>{try{await v(window.location.pathname)}catch(a){console.error("Error in router:",a)}})();P();p();p();export{E as A,e as B,p as a,y as b,L as c,A as d,P as l};
