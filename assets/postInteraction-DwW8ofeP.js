import{c as E,d as I}from"./main-BnSz6Qq4.js";import{r as q}from"./read-DeBWMSpm.js";const k=(e="")=>{const t=e!=="";return`
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
  `},O=e=>`
            <div class="profile-wrapper">
              <div class="profile">
              <img
                class="profile-image"
                src="${e.author.avatar||"/fed2-js2-ca-FransoArbela/images/no_img.png"}"
                alt="${e.author.avatar.alt||"Profile Image"}"
              />
              <h3 class="username">${e.author.name}</h3>
                </div>
                <div class="profile-edit">
                </div>
            </div>
      `,_=e=>{let t=e.media?.url||"/fed2-js2-ca-FransoArbela/images/no_img.png",a=e.media?.alt||"Post Image";return`
            <div class="post-image">
              <img src="${t}" alt="${a}" />
            </div>
      `},B=e=>{let t=e.author.avatar.url||"/fed2-js2-ca-FransoArbela/images/no_img.png",a=e.author.avatar.alt||"Post Image";return`
            <div class="post-image">
              <img src="${t}" alt="${a}" />
            </div>
      `},U=e=>{const t=e.comments,a=(e.reactions||[]).map(r=>({emoji:r?.symbol||"❓",count:r?.count||0,reactors:r?.reactors||[]}));let i="",c="";if(a.length===0?i='<button><i class="fa-regular fa-heart"></i></button>':c=a.map(r=>`<span class="reaction-item">${r.count} ${r.emoji}</span>`).join(" "),e||t)return`
        <div class="like-comments-wrapper">
          <div class="like-comments">
            <div class="reaction-btns">
              ${i}
              <div class="view-post-likes">
                ${c}
              </div>
              <div class="reaction-container">
                <button class="reaction-btn" data-reaction-type="👍">👍</button>
                <button class="reaction-btn" data-reaction-type="❤️">❤️</button>
                <button class="reaction-btn" data-reaction-type="😂">😂</button>
              </div>
            </div>
            <button class="commentsBtn">comments</button>
          </div>
          <div class="count-and-time">
            <div class="posted-time">${A(e.created)}</div>
          </div>
        </div>
      `},F=e=>`
                <p class="post-text">
                ${e.body||""}
                </p>
      `,M=(e,t)=>{const a=()=>JSON.parse(localStorage.getItem("profile"))?.name===e.author.name?'<button class="comment-delete">delete</button>':"";return`
    <div class="author-name-target comment" id="${e.id}">
      <div class="comment-profile">
        ${B(e)}
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
              ${a()}
            </div>
          </div>
        </div>
        <div class="comment-text-wrapper">
          <p class="comment-text">${e.body||""}</p>
          <div class="comment-action">
            <p class="posted-time">${A(e.created)}</p>
            <button class="like">like</button>
            <button class="reply-to">reply</button>
            <p class="likes">5 likes</p>
          </div>
        </div>
        <div class="reply-section">
        ${x(W(e.id,t),t)}      
        </div>
      </div>
    </div>
  `},W=(e,t)=>{const a=[],i=c=>{t.forEach(r=>{r.replyToId===c&&(a.push(r),i(r.id))})};return i(e),a},z=e=>{const t=e.comments||[];return t.filter(c=>c.replyToId===null).map(c=>M(c,t)).join("")},x=(e,t)=>{const a=r=>{const y=t.find(C=>C.id===r);return y?y.author.name:"unknown"},i=r=>JSON.parse(localStorage.getItem("profile"))?.name===r?'<button class="comment-delete">delete</button>':"";return e.map(r=>`
        <div class="author-name-target reply" id="${r.id}">
          <div class="reply-profile">
            ${B(r)}
          </div>
          <div class="reply-body">
            <div class="user-Info reply-username-wrapper">
              <div class="reply-username">
                <p class="username">${r.author.name}</p>
              </div>
              <div class="reply-option">
                <button class="option-btn">...</button>
                <div class="option-btn-wrapper">
                  <button class="comment-edit">edit</button>
                  ${i(r.author.name)}
                </div>
              </div>
            </div>
            <p class="reply-text">
              <span class="mention">@${a(r.replyToId)}</span>
              ${r.body||""}
            </p>
            <div class="reply-action">
              <p class="posted-time">${A(r.created)}</p>
              <button class="like">like</button>
              <button class="reply-to">reply</button>
              <p class="likes">5 likes</p>
            </div>
          </div>
        </div>
      `).join("")},A=e=>{const t=new Date(e),i=new Date-t,c=Math.floor(i/(1e3*60)),r=Math.floor(c/60);return c<1?"just now":c<60?`${c}m `:r<24?`${r}h `:`${Math.floor(r/24)}d`},V=e=>{const t=document.createElement("div");return t.innerHTML=`
    <div class="post" id="${e?.id}">
      ${O(e)}
      ${_(e)}
      <div class="post-body">
        ${U(e)}
        <div class="post-text-wrapper">
          ${F(e)}
        </div>
        <div class="comment-section">
          ${z(e)}
        </div>
        <div class="input-wrapper">
          ${k("")}
        </div>
      </div>
    </div>
  `,t.firstElementChild};function Z(e){return{id:e.id,title:e.title,body:e.body,created:e.created,updated:e.updated,author:{name:e.author?.name??"Unknown",email:e.author?.email??"",bio:e.author?.bio??"",avatar:e.author?.avatar?.url??"",banner:e.author?.banner?.url??""},media:{url:e.media?.url??"",alt:e.media?.alt??""},tags:Array.isArray(e.tags)?e.tags:[],reactions:Array.isArray(e.reactions)?e.reactions:[],reactionCount:e._count?.reactions??0,commentCount:e._count?.comments??0,comments:Array.isArray(e.comments)?e.comments.map(t=>({id:t.id,body:t.body,created:t.created,replyToId:t.replyToId??null,postId:e.id,author:{name:t.author?.name??"Anonymous",email:t.author?.email??"",bio:t.author?.bio??"",avatar:{url:t.author?.avatar?.url??"",alt:t.author?.avatar?.alt??""}},banner:{url:t.author?.banner?.url??"",alt:t.author?.banner?.alt??""}})):[]}}async function J(e){try{if(!(await fetch(`${E}/${e}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${I}`}})).ok)throw new Error("Post deletion failed")}catch(t){console.error("Error deleting post:",t)}}async function K(e,t){try{if(!(await fetch(`${E}/${e}/comment/${t}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${I}`}})).ok)throw new Error("Comment deletion failed")}catch(a){console.error("Error deleting comment:",a)}}async function X(e,t){try{const a=await fetch(`${E}/${e}/react/${t}`,{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${I}`}});if(!a.ok)throw new Error("Like failed");console.log("Like successful",a)}catch(a){console.error(a)}}async function P(e,t,a=null){try{const i={body:t};a&&(i.replyToId=Number(a));const c=await fetch(`${E}/${e}/comment`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${I}`},body:JSON.stringify(i)});if(!c.ok)throw new Error("Comment submission failed");return await c.json()}catch(i){console.error("Error submitting comment:",i)}}const Y=()=>{const e=()=>{const l=document.querySelectorAll(".profile-wrapper"),o=()=>{const n=localStorage.getItem("profile"),d=JSON.parse(n).name,m=new URLSearchParams(window.location.search).get("username");return d===m?`
                  <button class="profile-edit">⋯</button>
                  <div class="profile-edit-wrapper">
                    <button class="edit">edit</button>
                    <button class="delete">delete</button>
                  </div>
                  `:""};l.forEach(n=>{const s=n.querySelector(".profile-edit");s.innerHTML=`${o()}`;const d=n.querySelector(".profile-edit-wrapper");s.addEventListener("click",u=>{u.preventDefault(),d.style.display==="flex"?d.style.display="none":d.style.display="flex"});const p=n.querySelector(".edit"),m=n.querySelector(".delete");p&&p.addEventListener("click",u=>{u.preventDefault();const f=n.closest(".post").id;window.location.href=`../posts/update.html?id=${f}`}),m&&m.addEventListener("click",u=>{u.preventDefault();const f=n.closest(".post").id;confirm("Delete this post?")&&(J(f),window.location.href="../posts/feed.html")})})},t=l=>{const o=document.getElementById(l);if(!o)return;const n=o.querySelector(".input-wrapper");n&&(n.innerHTML=k(""),i())},a=()=>{document.querySelectorAll(".reply-to").forEach(o=>{o.dataset.bound!=="true"&&(o.addEventListener("click",n=>{n.preventDefault();const s=o.closest(".post").id,d=o.closest(".author-name-target").id,p=o.closest(".author-name-target").querySelector(".username").textContent,m=o.closest(".post").querySelector(".input-wrapper");m.innerHTML=k(p);const u=m.querySelector("#submit-post-comment"),f=m.querySelector(".comment-input");u.dataset.bound="true",R(),u.addEventListener("click",async v=>{v.preventDefault();const h=f.value.trim();if(!h)return;const w=m.querySelector(".display-replying")!==null,b=await P(s,h,w?d:null);if(!b)return;const g=await q(b.data.owner);if(!g)return;const $={id:b.data.id,body:b.data.body,created:b.data.created,replyToId:w?d:null,postId:s,author:{name:g.data.name,email:g.data.email,avatar:{url:g.data.avatar.url||"/fed2-js2-ca-FransoArbela/images/no_img.png",alt:g.data.avatar.alt||"Profile Image"}}};if(w){const S=o.closest(".comment-body").querySelector(".reply-section"),L=[$],j=x(L,L),D=document.createElement("div");D.innerHTML=j.trim(),S.appendChild(D.firstElementChild);const T=m.querySelector(".display-replying");T&&T.remove()}else o.closest(".post").querySelector(".comment-section").appendChild(temp.firstElementChild);Y(),f.value="",t(s),a(),r(),y()})}),o.dataset.bound="true")})},i=()=>{document.querySelectorAll("#submit-post-comment.top-submit").forEach(o=>{o.dataset.bound!=="true"&&(o.addEventListener("click",async n=>{n.preventDefault();const s=o.closest(".post");if(!s)return;const d=s.querySelector(".input-wrapper");if(!d)return;const p=d.querySelector(".comment-input");if(!p)return;const m=p.value.trim();if(!m)return;const u=d.querySelector(".display-replying");u&&u.remove();const f=s.id,v=await P(f,m);if(!v)return;const h=await q(v.data.owner);if(!h)return;const w={id:v.data.id,body:v.data.body,created:v.data.created,author:{name:h.data.name,email:h.data.email,avatar:{url:h.data.avatar.url||"/fed2-js2-ca-FransoArbela/images/no_img.png",alt:h.data.avatar.alt||"Profile Image"}}},b=s.querySelector(".comment-section"),g=M(w,[]),$=document.createElement("div");$.innerHTML=g.trim(),Array.from($.children).forEach(S=>b.appendChild(S)),r(),y(),i(),p.value="",t(f)}),o.dataset.bound="true")})},c=()=>{document.querySelectorAll(".reaction-btns").forEach(o=>{o.addEventListener("mouseenter",()=>{const n=o.closest(".like-comments-wrapper").querySelector(".reaction-container");n.style.display="flex",o.querySelectorAll(".reaction-btn").forEach(d=>{d.addEventListener("click",p=>{p.preventDefault();const m=o.closest(".post").id,u=p.target.dataset.reactionType;X(m,u)})})}),o.addEventListener("mouseleave",()=>{const n=o.closest(".like-comments-wrapper").querySelector(".reaction-container");n.style.display="none"})})},r=()=>{document.querySelectorAll(".option-btn").forEach(o=>{o.dataset.bound!=="true"&&(o.addEventListener("click",n=>{n.preventDefault(),document.querySelectorAll(".option-btn-wrapper").forEach(d=>{d.style.display="none"});const s=o.closest(".reply-option")?.querySelector(".option-btn-wrapper")||o.closest(".comment-option")?.querySelector(".option-btn-wrapper");s&&(s.style.display="flex")}),o.dataset.bound="true")})},y=()=>{document.querySelectorAll(".comment-delete").forEach(o=>{o.dataset.bound!=="true"&&(o.addEventListener("click",async n=>{n.preventDefault();const s=o.closest(".author-name-target").id,d=o.closest(".post").id,p=o.closest(".author-name-target");!confirm("Delete this comment?")||!K(d,s)||p.remove()}),o.dataset.bound="true")})},C=()=>{document.querySelectorAll(".username").forEach(o=>{o.addEventListener("click",n=>{n.preventDefault();const s=o.closest(".post").querySelector(".username").textContent;window.location.href=`../profile/user.html?username=${s}`})})},H=()=>{document.querySelectorAll(".post-image").forEach(o=>{o.addEventListener("click",n=>{n.preventDefault();const s=o.closest(".post").id;window.location.href=`../posts/view.html?id=${s}`})})},R=()=>{const l=document.querySelector(".close-reply-display");!l||l.dataset.bound==="true"||(l.addEventListener("click",o=>{o.preventDefault();const n=l.closest(".display-replying");if(n){const s=n.closest(".post").id;t(s)}}),l.dataset.bound="true")},N=()=>{document.addEventListener("click",l=>{const o=l.target.closest(".option-btn"),n=l.target.closest(".option-btn-wrapper");!o&&!n&&document.querySelectorAll(".option-btn-wrapper").forEach(s=>{s.style.display="none"})})};e(),a(),i(),c(),r(),y(),C(),H(),N()};export{Y as a,Z as f,V as p};
