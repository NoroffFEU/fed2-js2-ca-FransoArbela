const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/login-D6vi_sXZ.js","assets/login-CMk0Zeaa.css","assets/register-B7GGT5un.js","assets/feed-DTFOyInm.js","assets/read-Dx5mNkXq.js","assets/authGuard-OOVH_Tj-.js","assets/feed-Ce6-uFp0.css","assets/postEdit-Cm3iccsp.js","assets/postCreate-D3bDzxsr.js","assets/profile-BIkc4T9q.js","assets/read-DgAHPANw.js","assets/profile-onG6eF-V.css","assets/viewPost-zl-KXuzA.js","assets/viewPost-D2osD9_g.css","assets/usersProfile-D2DJ3vdV.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&u(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const g="modulepreload",E=function(r){return"/fed2-js2-ca-FransoArbela/"+r},d={},n=function(t,l,u){let e=Promise.resolve();if(l&&l.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=a?.nonce||a?.getAttribute("nonce");e=Promise.allSettled(l.map(c=>{if(c=E(c),c in d)return;d[c]=!0;const m=c.endsWith(".css"),_=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${_}`))return;const f=document.createElement("link");if(f.rel=m?"stylesheet":g,m||(f.as="script"),f.crossOrigin="",f.href=c,s&&f.setAttribute("nonce",s),document.head.appendChild(f),m)return new Promise((b,w)=>{f.addEventListener("load",b),f.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return e.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},A="6c253408-d97b-44b3-af01-faab12978a1d",v="https://v2.api.noroff.dev",h=`${v}/social`,y=`${h}/posts`,I=`${h}/profiles`,i="/fed2-js2-ca-FransoArbela/";console.log(i);async function P(r=window.location.pathname){switch(r){case`${i}`:case`${i}index.html`:await n(()=>import("./home-p4cRUjxN.js"),[]);break;case`${i}auth/login.html`:await n(()=>import("./login-D6vi_sXZ.js"),__vite__mapDeps([0,1]));break;case`${i}auth/register.html`:await n(()=>import("./register-B7GGT5un.js"),__vite__mapDeps([2,1]));break;case`${i}posts/feed.html`:await n(()=>import("./feed-DTFOyInm.js"),__vite__mapDeps([3,4,5,6]));break;case`${i}posts/edit.html`:await n(()=>import("./postEdit-Cm3iccsp.js"),__vite__mapDeps([7,5]));break;case`${i}posts/create.html`:await n(()=>import("./postCreate-D3bDzxsr.js"),__vite__mapDeps([8,5]));break;case`${i}profile/me.html`:await n(()=>import("./profile-BIkc4T9q.js"),__vite__mapDeps([9,10,4,5,11]));break;case`${i}posts/view.html`:await n(()=>import("./viewPost-zl-KXuzA.js"),__vite__mapDeps([12,5,4,10,13]));break;case`${i}profile/user.html`:await n(()=>import("./usersProfile-D2DJ3vdV.js"),__vite__mapDeps([14,10,5,4,11]));break;default:await n(()=>import("./notFound-BNXFWLKC.js"),[])}}function L(){const r=localStorage.getItem("token"),t=window.location.pathname;r&&(t==="/"||t==="/auth/login.html"||t==="/auth/register.html")&&(window.location.href="/profile/me.html")}async function p(){if(document.getElementById("navigation-bar"))return;const r=window.location.pathname;console.log(r);let t="";switch(r){case"/posts/feed.html":t=`
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
  `,document.body.appendChild(l)}(async()=>{try{await P(window.location.pathname)}catch(r){console.error("Error in router:",r)}})();L();p();p();export{v as A,p as a,I as b,A as c,y as d,L as l};
