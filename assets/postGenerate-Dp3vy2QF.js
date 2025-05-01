import{c as S,d as E}from"./main-CcqVSLlx.js";import{r as q}from"./read-BAc75_St.js";async function R(e){try{if(!(await fetch(`${S}/${e}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${E}`}})).ok)throw new Error("Post deletion failed")}catch(t){console.error("Error deleting post:",t)}}async function O(e,t){try{if(!(await fetch(`${S}/${e}/comment/${t}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${E}`}})).ok)throw new Error("Comment deletion failed")}catch(r){console.error("Error deleting comment:",r)}}async function H(e,t){try{const r=await fetch(`${S}/${e}/react/${t}`,{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${E}`}});if(!r.ok)throw new Error("Like failed");console.log("Like successful",r)}catch(r){console.error(r)}}async function B(e,t,r=null){try{const a={body:t};r&&(a.replyToId=Number(r));const i=await fetch(`${S}/${e}/comment`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${E}`},body:JSON.stringify(a)});if(!i.ok)throw new Error("Comment submission failed");return await i.json()}catch(a){console.error("Error submitting comment:",a)}}const L=()=>{const e=()=>{const l=document.querySelectorAll(".profile-wrapper"),o=()=>{const n=localStorage.getItem("profile"),d=JSON.parse(n).name,c=new URLSearchParams(window.location.search).get("username");return d===c?`
          <button class="profile-edit">⋯</button>
          <div class="profile-edit-wrapper">
            <button class="edit">edit</button>
            <button class="delete">delete</button>
          </div>
        `:""};l.forEach(n=>{const s=n.querySelector(".profile-edit");s.innerHTML=`${o()}`;const d=n.querySelector(".profile-edit-wrapper");s.addEventListener("click",u=>{u.preventDefault(),d.style.display=d.style.display==="flex"?"none":"flex"});const m=n.querySelector(".edit"),c=n.querySelector(".delete");m&&m.addEventListener("click",u=>{u.preventDefault();const f=n.closest(".post").id;window.location.href=`../posts/update.html?id=${f}`}),c&&c.addEventListener("click",u=>{u.preventDefault();const f=n.closest(".post").id;confirm("Delete this post?")&&(R(f),window.location.href="../posts/feed.html")})})},t=l=>{const o=document.getElementById(l);if(!o)return;const n=o.querySelector(".input-wrapper");n&&(n.innerHTML=k(""))},r=()=>{document.querySelectorAll(".reply-to").forEach(o=>{o.dataset.bound!=="true"&&(o.addEventListener("click",n=>{n.preventDefault();const s=o.closest(".post").id,d=o.closest(".author-name-target").id,m=o.closest(".author-name-target").querySelector(".username").textContent,c=o.closest(".post").querySelector(".input-wrapper");c.innerHTML=k(m);const u=c.querySelector("#submit-post-comment"),f=c.querySelector(".comment-input");u.dataset.bound="true",N(),u.addEventListener("click",async y=>{y.preventDefault();const v=f.value.trim();if(!v)return;const $=c.querySelector(".display-replying")!==null,h=await B(s,v,$?d:null);if(!h)return;const g=await q(h.data.owner);if(!g)return;const A={id:h.data.id,body:h.data.body,created:h.data.created,author:{name:g.data.name,email:g.data.email,avatar:{url:g.data.avatar.url||"../src/assets/images/no_img.png",alt:g.data.avatar.alt||"Profile Image"}}};if($){const I=o.closest(".comment-body").querySelector(".reply-section");I.innerHTML+=w(A,[]);const C=c.querySelector(".display-replying");C&&C.remove()}else{const I=o.closest(".post").querySelector(".comment-section");I.innerHTML+=w(A,[])}L(),f.value="",t(s),r()})}),o.dataset.bound="true")})},a=()=>{document.querySelectorAll("#submit-post-comment.top-submit").forEach(o=>{o.dataset.bound!=="true"&&(o.addEventListener("click",async n=>{n.preventDefault();const s=o.closest(".post");if(!s)return;const d=s.querySelector(".input-wrapper");if(!d)return;const m=d.querySelector(".comment-input");if(!m)return;const c=m.value.trim();if(!c)return;const u=d.querySelector(".display-replying");u&&u.remove();const f=s.id,y=await B(f,c);if(!y)return;const v=await q(y.data.owner);if(!v)return;const $={id:y.data.id,body:y.data.body,created:y.data.created,author:{name:v.data.name,email:v.data.email,avatar:{url:v.data.avatar.url||"../src/assets/images/no_img.png",alt:v.data.avatar.alt||"Profile Image"}}},h=s.querySelector(".comment-section");h.innerHTML+=w($,[]),L(),m.value="",t(f),a()}),o.dataset.bound="true")})},i=()=>{document.querySelectorAll(".reaction-btns").forEach(o=>{o.addEventListener("mouseenter",()=>{const n=o.closest(".like-comments-wrapper").querySelector(".reaction-container");n.style.display="flex",o.querySelectorAll(".reaction-btn").forEach(d=>{d.addEventListener("click",m=>{m.preventDefault();const c=o.closest(".post").id,u=m.target.dataset.reactionType;H(c,u)})})}),o.addEventListener("mouseleave",()=>{const n=o.closest(".like-comments-wrapper").querySelector(".reaction-container");n.style.display="none"})})},p=()=>{document.querySelectorAll(".option-btn").forEach(o=>{o.addEventListener("click",n=>{n.preventDefault();const s=o.closest(".user-Info").querySelector(".option-btn-wrapper");s.style.display=s.style.display==="flex"?"none":"flex"})})},b=()=>{document.querySelectorAll(".comment-delete").forEach(o=>{o.dataset.bound!=="true"&&(o.addEventListener("click",async n=>{n.preventDefault();const s=o.closest(".author-name-target").id,d=o.closest(".post").id,m=o.closest(".author-name-target");!confirm("Delete this comment?")||!O(d,s)||m.remove()}),o.dataset.bound="true")})},T=()=>{document.querySelectorAll(".close-reply-display").forEach(o=>{o.addEventListener("click",n=>{n.preventDefault()})})},x=()=>{document.querySelectorAll(".username").forEach(o=>{o.addEventListener("click",n=>{n.preventDefault();const s=o.closest(".post").querySelector(".username").textContent;window.location.href=`../profile/user.html?username=${s}`})})},M=()=>{document.querySelectorAll(".post-image").forEach(o=>{o.addEventListener("click",n=>{n.preventDefault();const s=o.closest(".post").id;window.location.href=`../posts/view.html?id=${s}`})})},N=()=>{const l=document.querySelector(".close-reply-display");l&&l.addEventListener("click",o=>{o.preventDefault();const n=l.closest(".display-replying");if(n){const s=n.closest(".post").id;t(s)}})};e(),r(),a(),i(),p(),b(),T(),x(),M()},k=(e="")=>{const t=e!=="";return`
    ${t?`
      <div class="display-replying">
        <button class="close-reply-display">⨉</button>
        <p>replying to: @${e}</p>
      </div>
    `:""}
    <input class="comment-input" type="text" placeholder="Add a comment..." />
    <div class="submit-wrapper">
      <button id="submit-post-comment" class="submit ${t?"reply-submit":"top-submit"}">submit</button>
    </div>
  `},_=e=>`
    <div class="profile-wrapper">
      <div class="profile">
        <img
          class="profile-image"
          src="${e.author.avatar||"src/assets/images/no_img.png"}"
          alt="${e.author.avatar.alt||"Profile Image"}"
        />
        <h3 class="username">${e.author.name}</h3>
      </div>
      <div class="profile-edit"></div>
    </div>
  `,j=e=>{const t=e.media?.url||"../src/assets/images/no_img.png",r=e.media?.alt||"Post Image";return`
    <div class="post-image">
      <img src="${t}" alt="${r}" />
    </div>
  `},P=e=>{const t=e.author.avatar.url||"../src/assets/images/no_img.png",r=e.author.avatar.alt||"Post Image";return`
    <div class="post-image">
      <img src="${t}" alt="${r}" />
    </div>
  `},U=e=>{const t=(e.reactions||[]).map(a=>({emoji:a?.symbol||"❓",count:a?.count||0,reactors:a?.reactors||[]}));return`
    <div class="like-comments-wrapper">
      <div class="like-comments">
        <div class="reaction-btns">
          ${t.length?t.map(a=>`<span class="reaction-item">${a.count} ${a.emoji}</span>`).join(" "):'<button><i class="fa-regular fa-heart"></i></button>'}
          <div class="reaction-container">
            <button class="reaction-btn" data-reaction-type="👍">👍</button>
            <button class="reaction-btn" data-reaction-type="❤️">❤️</button>
            <button class="reaction-btn" data-reaction-type="😂">😂</button>
          </div>
        </div>
        <button class="commentsBtn">comments</button>
      </div>
      <div class="count-and-time">
        <div class="posted-time">${D(e.created)}</div>
      </div>
    </div>
  `},W=e=>`
    <p class="post-text">
      ${e.body||""}
    </p>
  `,w=(e,t)=>{const r=()=>JSON.parse(localStorage.getItem("profile"))?.name===e.author.name?'<button class="comment-delete">delete</button>':"";return`
    <div class="author-name-target comment" id="${e.id}">
      <div class="comment-profile">
        ${P(e)}
      </div>
      <div class="comment-body">
        <div class="user-Info comment-username-wrapper">
          <div class="comment-username">
            <p class="username">${e.author.name}</p>
          </div>
          <div class="comment-option">
            <button class="option-btn">⋯</button>
            <div class="option-btn-wrapper">
              <button class="top-comment-edit">edit</button>
              ${r()}
            </div>
          </div>
        </div>
        <div class="comment-text-wrapper">
          <p class="comment-text">${e.body||""}</p>
          <div class="comment-action">
            <p class="posted-time">${D(e.created)}</p>
            <button class="like">like</button>
            <button class="reply-to">reply</button>
            <p class="likes">5 likes</p>
          </div>
        </div>
        <div class="reply-section">
          ${J(t.filter(a=>a.replyToId===e.id),t)}
        </div>
      </div>
    </div>
  `},z=e=>{const t=e.comments||[];return t.filter(a=>a.replyToId===null).map(a=>w(a,t)).join("")},J=(e,t)=>{const r=i=>{const p=t.find(b=>b.id===i);return p?p.author.name:"unknown"},a=i=>JSON.parse(localStorage.getItem("profile"))?.name===i?'<button class="comment-delete">delete</button>':"";return`
    <div class="post-comments">
      ${e.map(i=>`
            <div class="author-name-target reply" id="${i.id}">
              <div class="reply-profile">
                ${P(i)}
              </div>
              <div class="reply-body">
                <div class="user-Info reply-username-wrapper">
                  <div class="reply-username">
                    <p class="username">${i.author.name}</p>
                  </div>
                  <div class="reply-option">
                    <button class="option-btn">...</button>
                    <div class="option-btn-wrapper">
                      <button class="comment-edit">edit</button>
                      ${a(i.author.name)}
                    </div>
                  </div>
                </div>
                <p class="reply-text">
                  <span class="mention">@${r(i.replyToId)}</span>
                  ${i.body||""}
                </p>
                <div class="reply-action">
                  <p class="posted-time">${D(i.created)}</p>
                  <button class="like">like</button>
                  <button class="reply-to">reply</button>
                  <p class="likes">5 likes</p>
                </div>
              </div>
            </div>
          `).join("")}
    </div>
  `},D=e=>{const t=new Date(e),a=new Date-t,i=Math.floor(a/(1e3*60)),p=Math.floor(i/60);return i<1?"just now":i<60?`${i}m `:p<24?`${p}h `:`${Math.floor(p/24)}d`},Y=e=>{const t=document.createElement("div");return t.innerHTML=`
    <div class="post" id="${e?.id}">
      ${_(e)}
      ${j(e)}
      <div class="post-body">
        ${U(e)}
        <div class="post-text-wrapper">
          ${W(e)}
        </div>
        <div class="comment-section">
          ${z(e)}
        </div>
        <div class="input-wrapper">
          ${k("")}
        </div>
      </div>
    </div>
  `,t.firstElementChild};function F(e){return{id:e.id,title:e.title,body:e.body,created:e.created,updated:e.updated,author:{name:e.author?.name??"Unknown",email:e.author?.email??"",bio:e.author?.bio??"",avatar:e.author?.avatar?.url??"",banner:e.author?.banner?.url??""},media:{url:e.media?.url??"",alt:e.media?.alt??""},tags:Array.isArray(e.tags)?e.tags:[],reactions:Array.isArray(e.reactions)?e.reactions:[],reactionCount:e._count?.reactions??0,commentCount:e._count?.comments??0,comments:Array.isArray(e.comments)?e.comments.map(t=>({id:t.id,body:t.body,created:t.created,replyToId:t.replyToId??null,postId:e.id,author:{name:t.author?.name??"Anonymous",email:t.author?.email??"",bio:t.author?.bio??"",avatar:{url:t.author?.avatar?.url??"",alt:t.author?.avatar?.alt??""}},banner:{url:t.author?.banner?.url??"",alt:t.author?.banner?.alt??""}})):[]}}export{L as a,F as f,Y as p};
