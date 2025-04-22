import{c as v,d as h}from"./main-BPK9mfgr.js";async function E(r){try{if(!(await fetch(`${v}/${r}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${h}`}})).ok)throw new Error("Post deletion failed");location.reload()}catch(i){console.error("Error deleting post:",i)}}async function A(r,i){try{if(!(await fetch(`${v}/${r}/comment/${i}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${h}`}})).ok)throw new Error("Comment deletion failed");location.reload()}catch(d){console.error("Error deleting comment:",d)}}async function D(r,i){try{const d=await fetch(`${v}/${r}/react/${i}`,{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${h}`}});if(!d.ok)throw new Error("Like failed");console.log("Like successful",d),location.reload()}catch(d){console.error(d)}}async function I(r,i,d=null){try{const p={body:i};d&&(p.replyToId=Number(d));const u=await fetch(`${v}/${r}/comment`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${h}`},body:JSON.stringify(p)});if(!u.ok)throw new Error("Comment submission failed");return window.location.reload(),await u.json()}catch(p){console.error("Error submitting comment:",p)}}const B=()=>{(()=>{const s=document.querySelectorAll(".profile-wrapper"),e=()=>{const t=localStorage.getItem("profile"),n=JSON.parse(t).name,c=new URLSearchParams(window.location.search).get("username");return n===c?`
                <button class="profile-edit">⋯</button>
                <div class="profile-edit-wrapper">
                  <button class="edit">edit</button>
                  <button class="delete">delete</button>
                </div>
                `:""};s.forEach(t=>{const o=t.querySelector(".profile-edit");o.innerHTML=`${e()}`;const n=t.querySelector(".profile-edit-wrapper");o.addEventListener("click",l=>{l.preventDefault(),n.style.display==="flex"?n.style.display="none":n.style.display="flex"});const a=t.querySelector(".edit"),c=t.querySelector(".delete");a&&a.addEventListener("click",l=>{l.preventDefault();const m=t.closest(".post").id;window.location.href=`../posts/update.html?id=${m}`}),c&&c.addEventListener("click",l=>{l.preventDefault();const m=t.closest(".post").id;confirm("Delete this post?")&&(E(m),window.location.href="../posts/feed.html")})})})(),(()=>{document.querySelectorAll("#submit-post-comment").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const o=e.closest(".post").id,n=e.closest(".input-wrapper").querySelector(".comment-input"),a=n.value.trim();a&&(I(o,a),n.value="")})})})(),(()=>{document.querySelectorAll(".reply-to").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const o=e.closest(".post").id,n=e.closest(".author-name-target").id,a=e.closest(".author-name-target").querySelector(".username").textContent,c=e.closest(".post").querySelector(".input-wrapper");c.innerHTML=g(a),c.dataset.replyTo=n;const l=c.querySelector("#submit-post-comment"),m=c.querySelector(".comment-input");l.addEventListener("click",f=>{f.preventDefault();const C=m.value.trim();C&&(I(o,C,n),c.innerHTML=g())})})})})(),(()=>{document.querySelectorAll(".reaction-btns").forEach(e=>{e.addEventListener("mouseenter",()=>{const t=e.closest(".like-comments-wrapper").querySelector(".reaction-container");t.style.display="flex",e.querySelectorAll(".reaction-btn").forEach(n=>{n.addEventListener("click",a=>{a.preventDefault();const c=e.closest(".post").id,l=a.target.dataset.reactionType;D(c,l)})})}),e.addEventListener("mouseleave",()=>{const t=e.closest(".like-comments-wrapper").querySelector(".reaction-container");t.style.display="none"})})})(),(()=>{document.querySelectorAll(".option-btn").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const o=e.closest(".user-Info").querySelector(".option-btn-wrapper");o.style.display==="flex"?o.style.display="none":o.style.display="flex"})})})(),(()=>{document.querySelectorAll(".comment-delete").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const o=e.closest(".author-name-target").id,n=e.closest(".post").id;confirm("Delete this comment?")&&A(n,o)})})})(),document.querySelectorAll(".close-reply-display").forEach(s=>{s.addEventListener("click",e=>{e.preventDefault()})}),(()=>{document.querySelectorAll(".username").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const o=e.closest(".post").querySelector(".username").textContent;window.location.href=`../profile/user.html?username=${o}`})})})(),document.querySelectorAll(".post-image").forEach(s=>{s.addEventListener("click",e=>{e.preventDefault();const t=s.closest(".post").id;window.location.href=`../posts/view.html?id=${t}`})}),(()=>{document.querySelectorAll(".post").forEach(e=>{const t=e.querySelector(".comment-section"),o=e.querySelector(".commentsBtn");o.addEventListener("click",n=>{n.preventDefault(),t.style.display==="block"?(t.style.display="none",o.textContent="comments"):(t.style.display="block",o.textContent="hide comments")})})})(),(()=>{document.querySelectorAll(".author-name-target.comment").forEach(e=>{const t=e.querySelector(".reply-section"),o=t?.querySelectorAll(".reply");if(!o||o.length===0){t.style.display="none";return}const n=o.length,a=document.createElement("button");a.classList.add("show-reply-btn"),a.textContent=`Show ${n} repl${n===1?"y":"ies"}`,e.querySelector(".comment-action").appendChild(a),a.addEventListener("click",l=>{l.preventDefault();const m=t.style.display==="block";t.style.display=m?"none":"block",a.textContent=`${m?"Show":"Hide"} ${n} repl${n===1?"y":"ies"}`}),t.style.display="none"})})()},g=(r="")=>`
      ${r?`
      <div class="display-replying">
      <button class="close-reply-display">⨉</button>
      <p>replying to: @${r}</p>
      </div>
      `:""}
      <input class="comment-input" type="text" placeholder="Add a comment..." />
      <div class="submit-wrapper">
        <button id="submit-post-comment" class="submit">submit</button>
      </div>
    `,q=r=>{const i=s=>`
            <div class="profile-wrapper">
              <div class="profile">
              <img
                class="profile-image"
                src="${s.author.avatar||"../src/assets/images/no_img.png"}"
                alt="${s.author.avatar.alt||"Profile Image"}"
              />
              <h3 class="username">${s.author.name}</h3>
                </div>
                <div class="profile-edit">
                </div>
            </div>
      `,d=s=>{let e=s.media?.url||"../src/assets/images/no_img.png",t=s.media?.alt||"Post Image";return`
            <div class="post-image">
              <img src="${e}" alt="${t}" />
            </div>
      `},p=(s,e)=>{const t=[s],o=[];for(;t.length;){const n=t.pop(),a=e.filter(c=>c.replyToId===n);o.push(...a),t.push(...a.map(c=>c.id))}return o},u=s=>{let e=s.author.avatar.url||"../src/assets/images/no_img.png",t=s.author.avatar.alt||"Post Image";return`
            <div class="post-image">
              <img src="${e}" alt="${t}" />
            </div>
      `},b=s=>{const e=s.comments,t=(s.reactions||[]).map(a=>({emoji:a?.symbol||"❓",count:a?.count||0,reactors:a?.reactors||[]}));let o="",n="";if(t.length===0?o='<button><i class="fa-regular fa-heart"></i></button>':n=t.map(a=>`<span class="reaction-item">${a.count} ${a.emoji}</span>`).join(" "),s||e)return`
        <div class="like-comments-wrapper">
          <div class="like-comments">
            <div class="reaction-btns">
              ${o}
              <div class="view-post-likes">
                ${n}
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
            <div class="posted-time">${y(s.created)}</div>
          </div>
        </div>
      `},S=s=>`
                <p class="post-text">
                ${s.body||""}
                </p>
      `,$=s=>{const e=s.comments;return localStorage.setItem("allComments",JSON.stringify(s.comments)),`<div class="post-comments">${(s.comments.filter(n=>n.replyToId===null)||[]).map(n=>{const a=()=>{const c=localStorage.getItem("profile"),m=JSON.parse(c).name,f=n.author.name;return m===f?'<button class="comment-delete">delete</button>':""};return`
                <div class="author-name-target comment" id="${n.id}">
                  <div class="comment-profile">
                    ${u(n)}
                  </div>
                  <div class="comment-body">
                    <div class="user-Info comment-username-wrapper">
                      <div class="comment-username">
                      <p class="username">${n.author.name}</p>
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
                      <p class="comment-text">
                        ${n.body||""}
                      </p>
                      <div class="comment-action">
                        <p class="posted-time">${y(n.created)}</p>
                        <button class="like">like</button>
                        <button class="reply-to">reply</button>
                        <p class="likes">5 likes</p>
                      </div>
                    </div>
                    <div class="reply-section">
                      ${w(p(n.id,e))}
                    </div>
                  </div>
                </div>
        `}).join("")}</div>`},w=s=>{const e=o=>{const a=JSON.parse(localStorage.getItem("allComments")||"[]").find(c=>c.id===o);return a?a.author.name:"unknown"};return`<div class="post-comments">${(s||[]).map(o=>{const n=()=>{const a=localStorage.getItem("profile"),l=JSON.parse(a).name,m=o.author.name;return l===m?'<button class="comment-delete">delete</button>':""};return`
         <div class="author-name-target reply" id="${o.id}">
        <div class="reply-profile">
          ${u(o)}
        </div>
        <div class="reply-body">
          <div class="user-Info reply-username-wrapper">
            <div class="reply-username">
            <p class="username">${o.author.name}</p>
            </div>
            <div class="reply-option">
              <button class="option-btn">...</button>
              <div class="option-btn-wrapper">
                <button class="comment-edit">edit</button>
                ${n()}
              </div>
            </div>
          </div>
            <p class="reply-text">
              <span class="mention">@${e(o.replyToId)}</span> ${o.body||""}
            </p>
            <div class="reply-action">
            <p class="posted-time">${y(o.created)}</p>
              <button class="like">like</button>
              <button class="reply-to">reply</button>
              <p class="likes">5 likes</p>
            </div>       
        </div>
      </div>`}).join("")}</div>`},y=s=>{const e=new Date(s),o=new Date-e,n=Math.floor(o/(1e3*60)),a=Math.floor(n/60);return n<1?"just now":n<60?`${n}m `:a<24?`${a}h `:`${Math.floor(a/24)}d`};return`
    <div class="post" id="${r?.id}">
        ${i(r)}
        ${d(r)}
        <div class="post-body">
          ${b(r)}
          <div class="post-text-wrapper">
            ${S(r)}
            </div>
            <div class="comment-section">
            ${$(r)}
            </div>
            <div class="input-wrapper">
            ${g("")}
          </div>
        </div>
    </div>
  `};function L(r){return{id:r.id,title:r.title,body:r.body,created:r.created,updated:r.updated,author:{name:r.author?.name??"Unknown",email:r.author?.email??"",bio:r.author?.bio??"",avatar:r.author?.avatar?.url??"",banner:r.author?.banner?.url??""},media:{url:r.media?.url??"",alt:r.media?.alt??""},tags:Array.isArray(r.tags)?r.tags:[],reactions:Array.isArray(r.reactions)?r.reactions:[],reactionCount:r._count?.reactions??0,commentCount:r._count?.comments??0,comments:Array.isArray(r.comments)?r.comments.map(i=>({id:i.id,body:i.body,created:i.created,replyToId:i.replyToId??null,postId:r.id,author:{name:i.author?.name??"Anonymous",email:i.author?.email??"",bio:i.author?.bio??"",avatar:{url:i.author?.avatar?.url??"",alt:i.author?.avatar?.alt??""}},banner:{url:i.author?.banner?.url??"",alt:i.author?.banner?.alt??""}})):[]}}export{L as f,q as g,B as p};
