const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/login-CP7s-ihY.js","assets/login-CMk0Zeaa.css","assets/register-Dq0mi05W.js","assets/feed-COzG1ivG.js","assets/read-DeKABMXd.js","assets/authGuard-DhotU-J4.js","assets/feed-Ce6-uFp0.css","assets/postEdit-CGRwmVqW.js","assets/postCreate-B6fv0TI7.js","assets/profile-Biv2vhv2.js","assets/read-DwPFMF_1.js","assets/profile-onG6eF-V.css","assets/viewPost-CwuT4nRG.js","assets/viewPost-D2osD9_g.css","assets/usersProfile-z28oMQO4.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const g="modulepreload",E=function(a){return"/fed2-js2-ca-FransoArbela/"+a},d={},n=function(t,l,u){let e=Promise.resolve();if(l&&l.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=i?.nonce||i?.getAttribute("nonce");e=Promise.allSettled(l.map(c=>{if(c=E(c),c in d)return;d[c]=!0;const m=c.endsWith(".css"),_=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${_}`))return;const f=document.createElement("link");if(f.rel=m?"stylesheet":g,m||(f.as="script"),f.crossOrigin="",f.href=c,s&&f.setAttribute("nonce",s),document.head.appendChild(f),m)return new Promise((b,w)=>{f.addEventListener("load",b),f.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return e.then(i=>{for(const s of i||[])s.status==="rejected"&&r(s.reason);return t().catch(r)})},A="6c253408-d97b-44b3-af01-faab12978a1d",v="https://v2.api.noroff.dev",h=`${v}/social`,y=`${h}/posts`,I=`${h}/profiles`,o="/fed2-js2-ca-FransoArbela/";console.log(o);async function P(a=window.location.pathname){switch(a){case`${o}`:case`${o}index.html`:await n(()=>import("./home-p4cRUjxN.js"),[]);break;case`${o}auth/login.html`:await n(()=>import("./login-CP7s-ihY.js"),__vite__mapDeps([0,1]));break;case`${o}auth/register.html`:await n(()=>import("./register-Dq0mi05W.js"),__vite__mapDeps([2,1]));break;case`${o}posts/feed.html`:await n(()=>import("./feed-COzG1ivG.js"),__vite__mapDeps([3,4,5,6]));break;case`${o}posts/edit.html`:await n(()=>import("./postEdit-CGRwmVqW.js"),__vite__mapDeps([7,5]));break;case`${o}posts/create.html`:await n(()=>import("./postCreate-B6fv0TI7.js"),__vite__mapDeps([8,5]));break;case`${o}profile/me.html`:await n(()=>import("./profile-Biv2vhv2.js"),__vite__mapDeps([9,10,4,5,11]));break;case`${o}posts/view.html`:await n(()=>import("./viewPost-CwuT4nRG.js"),__vite__mapDeps([12,5,4,10,13]));break;case`${o}profile/user.html`:await n(()=>import("./usersProfile-z28oMQO4.js"),__vite__mapDeps([14,10,5,4,11]));break;default:await n(()=>import("./notFound-BNXFWLKC.js"),[])}}function L(){const a=localStorage.getItem("token"),t=window.location.pathname;a&&(t===`${o}`||t===`${o}auth/login.html`||t===`${o}auth/register.html`)&&(window.location.href=`${o}profile/me.html`)}async function p(){if(document.getElementById("navigation-bar"))return;const a=window.location.pathname;console.log(a);let t="";switch(a){case"/posts/feed.html":t=`
        <a href="posts/feed.html">Home</a>
        <a href="/profile/me.html">Profile</a>
        <a href="/profile.html">+</a>
        <a href="/profile.html">Search</a>
        <a id="logout-button" href="">Log out</a>`;break;case"/profile/me.html":t=`
        <a href="/posts/feed.html">Home</a>
        <a href="/profile/me.html">Profile</a>
        <a href="/profile.html">+</a>
        <a href="/profile.html">Search</a>
        <a id="logout-button" href="">Log out</a>`;break;case"/posts/view.html":t=`
        <a href="/posts/feed.html">Home</a>
        <a href="/profile/me.html">Profile</a>
        <a href="/profile.html">+</a>
        <a href="/profile.html">Search</a>
        <a id="logout-button" href="">Log out</a>`;break;case"/profile/user.html":t=`
        <a href="/posts/feed.html">Home</a>
        <a href="/profile/me.html">Profile</a>
        <a href="/profile.html">+</a>
        <a href="/profile.html">Search</a>
        <a id="logout-button" href="">Log out</a>`;break;default:t=`
      `}const l=document.createElement("div");l.innerHTML=`
    <nav id="navigation-bar" class="p-4 bg-gray-900 text-white flex items-center justify-between fixed bottom-0 w-full">

      <div class="bg-red-900 text-white w-full max-w-screen-lg flex items-center justify-between m-auto">
        <div class="flex items-center gap-4 bg-blue-300 w-fit m-auto">
         ${t}
        </div>
      </div>
    </nav>
  `,document.body.appendChild(l)}(async()=>{try{await P(window.location.pathname)}catch(a){console.error("Error in router:",a)}})();L();p();p();export{v as A,o as B,p as a,I as b,A as c,y as d,L as l};
