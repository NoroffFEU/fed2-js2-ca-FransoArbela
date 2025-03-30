const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/login-QKd_1hUw.js","assets/constants-2sVKtVoG.js","assets/login-CMk0Zeaa.css","assets/register-u8A32pSJ.js","assets/feed-BPHmDh3o.js","assets/read-0dNlfVxd.js","assets/authGuard-OOVH_Tj-.js","assets/feed-Ce6-uFp0.css","assets/postEdit-Cm3iccsp.js","assets/postCreate-AAB7PCzY.js","assets/profile-apTCDMP7.js","assets/read-CmSSu15i.js","assets/profile-onG6eF-V.css","assets/viewPost-BRpAD42X.js","assets/viewPost-D2osD9_g.css","assets/usersProfile-D01QDDGy.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&m(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const g="modulepreload",w=function(o){return"/fed2-js2-ca-FransoArbela/"+o},u={},i=function(t,l,m){let e=Promise.resolve();if(l&&l.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),n=a?.nonce||a?.getAttribute("nonce");e=Promise.allSettled(l.map(s=>{if(s=w(s),s in u)return;u[s]=!0;const f=s.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${d}`))return;const c=document.createElement("link");if(c.rel=f?"stylesheet":g,f||(c.as="script"),c.crossOrigin="",c.href=s,n&&c.setAttribute("nonce",n),document.head.appendChild(c),f)return new Promise((p,_)=>{c.addEventListener("load",p),c.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${s}`)))})}))}function r(a){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=a,window.dispatchEvent(n),!n.defaultPrevented)throw a}return e.then(a=>{for(const n of a||[])n.status==="rejected"&&r(n.reason);return t().catch(r)})};async function b(o=window.location.pathname){switch(o){case"/":case"/index.html":await i(()=>Promise.resolve().then(()=>E),void 0);break;case"/auth/login.html":await i(()=>import("./login-QKd_1hUw.js"),__vite__mapDeps([0,1,2]));break;case"/auth/register.html":await i(()=>import("./register-u8A32pSJ.js"),__vite__mapDeps([3,2]));break;case"/posts/feed.html":await i(()=>import("./feed-BPHmDh3o.js"),__vite__mapDeps([4,5,1,6,7]));break;case"/posts/edit.html":await i(()=>import("./postEdit-Cm3iccsp.js"),__vite__mapDeps([8,6]));break;case"/posts/create.html":await i(()=>import("./postCreate-AAB7PCzY.js"),__vite__mapDeps([9,6]));break;case"/profile/me.html":await i(()=>import("./profile-apTCDMP7.js"),__vite__mapDeps([10,11,1,5,6,12]));break;case"/posts/view.html":await i(()=>import("./viewPost-BRpAD42X.js"),__vite__mapDeps([13,6,5,1,11,14]));break;case"/profile/user.html":await i(()=>import("./usersProfile-D01QDDGy.js"),__vite__mapDeps([15,11,1,6,5,12]));break;default:await i(()=>import("./notFound-BNXFWLKC.js"),[])}}function v(){const o=localStorage.getItem("token"),t=window.location.pathname;o&&(t==="/"||t==="/auth/login.html"||t==="/auth/register.html")&&(window.location.href="/profile/me.html")}async function h(){if(document.getElementById("navigation-bar"))return;const o=window.location.pathname;console.log(o);let t="";switch(o){case"/posts/feed.html":t=`
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
  `,document.body.appendChild(l)}(async()=>{try{await b(window.location.pathname)}catch(o){console.error("Error in router:",o)}})();v();h();h();const E=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{v as a,h as l};
