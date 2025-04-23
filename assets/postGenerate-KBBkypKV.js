import{c as h,d as b}from"./main-BDmEFsOg.js";async function E(t){try{if(!(await fetch(`${h}/${t}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${b}`}})).ok)throw new Error("Post deletion failed");location.reload()}catch(i){console.error("Error deleting post:",i)}}async function k(t,i){try{if(!(await fetch(`${h}/${t}/comment/${i}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${b}`}})).ok)throw new Error("Comment deletion failed");location.reload()}catch(l){console.error("Error deleting comment:",l)}}async function C(t,i){try{const l=await fetch(`${h}/${t}/react/${i}`,{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${b}`}});if(!l.ok)throw new Error("Like failed");console.log("Like successful",l),location.reload()}catch(l){console.error(l)}}async function I(t,i,l=null){try{const m={body:i};l&&(m.replyToId=Number(l));const u=await fetch(`${h}/${t}/comment`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${b}`},body:JSON.stringify(m)});if(!u.ok)throw new Error("Comment submission failed");return window.location.reload(),await u.json()}catch(m){console.error("Error submitting comment:",m)}}const D=()=>{(()=>{const d=document.querySelectorAll(".profile-wrapper"),e=()=>{const o=localStorage.getItem("profile"),a=JSON.parse(o).name,s=new URLSearchParams(window.location.search).get("username");return a===s?`
                <button class="profile-edit">⋯</button>
                <div class="profile-edit-wrapper">
                  <button class="edit">edit</button>
                  <button class="delete">delete</button>
                </div>
                `:""};d.forEach(o=>{const n=o.querySelector(".profile-edit");n.innerHTML=`${e()}`;const a=o.querySelector(".profile-edit-wrapper");n.addEventListener("click",c=>{c.preventDefault(),a.style.display==="flex"?a.style.display="none":a.style.display="flex"});const r=o.querySelector(".edit"),s=o.querySelector(".delete");r&&r.addEventListener("click",c=>{c.preventDefault();const p=o.closest(".post").id;window.location.href=`../posts/update.html?id=${p}`}),s&&s.addEventListener("click",c=>{c.preventDefault();const p=o.closest(".post").id;confirm("Delete this post?")&&(E(p),window.location.href="../posts/feed.html")})})})(),(()=>{document.querySelectorAll("#submit-post-comment").forEach(e=>{e.addEventListener("click",o=>{o.preventDefault();const n=e.closest(".post").id,a=e.closest(".input-wrapper").querySelector(".comment-input"),r=a.value.trim();r&&(I(n,r),a.value="")})})})(),(()=>{document.querySelectorAll(".reply-to").forEach(e=>{e.addEventListener("click",o=>{o.preventDefault();const n=e.closest(".post").id,a=e.closest(".author-name-target").id,r=e.closest(".author-name-target").querySelector(".username").textContent,s=e.closest(".post").querySelector(".input-wrapper");s.innerHTML=$(r),s.dataset.replyTo=a;const c=s.querySelector("#submit-post-comment"),p=s.querySelector(".comment-input");c.addEventListener("click",v=>{v.preventDefault();const y=p.value.trim();y&&(I(n,y,a),s.innerHTML=$())})})})})(),(()=>{document.querySelectorAll(".reaction-btns").forEach(e=>{e.addEventListener("mouseenter",()=>{const o=e.closest(".like-comments-wrapper").querySelector(".reaction-container");o.style.display="flex",e.querySelectorAll(".reaction-btn").forEach(a=>{a.addEventListener("click",r=>{r.preventDefault();const s=e.closest(".post").id,c=r.target.dataset.reactionType;C(s,c)})})}),e.addEventListener("mouseleave",()=>{const o=e.closest(".like-comments-wrapper").querySelector(".reaction-container");o.style.display="none"})})})(),(()=>{document.querySelectorAll(".option-btn").forEach(e=>{e.addEventListener("click",o=>{o.preventDefault();const n=e.closest(".user-Info").querySelector(".option-btn-wrapper");n.style.display==="flex"?n.style.display="none":n.style.display="flex"})})})(),(()=>{document.querySelectorAll(".comment-delete").forEach(e=>{e.addEventListener("click",o=>{o.preventDefault();const n=e.closest(".author-name-target").id,a=e.closest(".post").id;confirm("Delete this comment?")&&k(a,n)})})})(),document.querySelectorAll(".close-reply-display").forEach(d=>{d.addEventListener("click",e=>{e.preventDefault()})}),(()=>{document.querySelectorAll(".username").forEach(e=>{e.addEventListener("click",o=>{o.preventDefault();const n=e.closest(".post").querySelector(".username").textContent;window.location.href=`../profile/user.html?username=${n}`})})})(),document.querySelectorAll(".post-image").forEach(d=>{d.addEventListener("click",e=>{e.preventDefault();const o=d.closest(".post").id;window.location.href=`../posts/view.html?id=${o}`})})},$=(t="")=>`
      ${t?`
      <div class="display-replying">
      <button class="close-reply-display">⨉</button>
      <p>replying to: @${t}</p>
      </div>
      `:""}
      <input class="comment-input" type="text" placeholder="Add a comment..." />
      <div class="submit-wrapper">
        <button id="submit-post-comment" class="submit">submit</button>
      </div>
    `,P=t=>{const i=e=>`
            <div class="profile-wrapper">
              <div class="profile">
              <img
                class="profile-image"
                src="${e.author.avatar||"../src/assets/images/no_img.png"}"
                alt="${e.author.avatar.alt||"Profile Image"}"
              />
              <h3 class="username">${e.author.name}</h3>
                </div>
                <div class="profile-edit">
                </div>
            </div>
      `,l=e=>{let o=e.media?.url||"../src/assets/images/no_img.png",n=e.media?.alt||"Post Image";return`
            <div class="post-image">
              <img src="${o}" alt="${n}" />
            </div>
      `},m=e=>{let o=e.author.avatar.url||"../src/assets/images/no_img.png",n=e.author.avatar.alt||"Post Image";return`
            <div class="post-image">
              <img src="${o}" alt="${n}" />
            </div>
      `},u=e=>{const o=e.comments,n=(e.reactions||[]).map(s=>({emoji:s?.symbol||"❓",count:s?.count||0,reactors:s?.reactors||[]}));let a="",r="";if(n.length===0?a='<button><i class="fa-regular fa-heart"></i></button>':r=n.map(s=>`<span class="reaction-item">${s.count} ${s.emoji}</span>`).join(" "),e||o)return`
        <div class="like-comments-wrapper">
          <div class="like-comments">
            <div class="reaction-btns">
              ${a}
              <div class="view-post-likes">
                ${r}
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
            <div class="posted-time">${f(e.created)}</div>
          </div>
        </div>
      `},g=e=>`
                <p class="post-text">
                ${e.body||""}
                </p>
      `,w=e=>{const o=e.comments;return`<div class="post-comments">${(e.comments.filter(r=>r.replyToId===null)||[]).map(r=>{const s=()=>{const c=localStorage.getItem("profile"),v=JSON.parse(c).name,y=r.author.name;return v===y?'<button class="comment-delete">delete</button>':""};return`
                <div class="author-name-target comment" id="${r.id}">
                  <div class="comment-profile">
                    ${m(r)}
                  </div>
                  <div class="comment-body">
                    <div class="user-Info comment-username-wrapper">
                      <div class="comment-username">
                      <p class="username">${r.author.name}</p>
                      </div>
                      <div class="comment-option">
                        <button class="option-btn">⋯</button>
                        <div class="option-btn-wrapper">
                          <button class="top-comment-edit">edit</button>
                          ${s()}
                          </div>
                      </div>
                    </div>
                    <div class="comment-text-wrapper">
                      <p class="comment-text">
                        ${r.body||""}
                      </p>
                      <div class="comment-action">
                        <p class="posted-time">${f(r.created)}</p>
                        <button class="like">like</button>
                        <button class="reply-to">reply</button>
                        <p class="likes">5 likes</p>
                      </div>
                    </div>
                    <div class="reply-section">
                    ${S(o.filter(c=>c.replyToId===r.id))}
                    </div>
                  </div>
                </div>
        `}).join("")}</div>`},S=e=>`<div class="post-comments">${(e||[]).map(n=>{const a=()=>{const r=localStorage.getItem("profile"),c=JSON.parse(r).name,p=n.author.name;return c===p?'<button class="comment-delete">delete</button>':""};return`
         <div class="author-name-target reply" id="${n.id}">
        <div class="reply-profile">
          ${m(n)}
        </div>
        <div class="reply-body">
          <div class="user-Info reply-username-wrapper">
            <div class="reply-username">
            <p class="username">${n.author.name}</p>
            </div>
            <div class="reply-option">
              <button class="option-btn">...</button>
              <div class="option-btn-wrapper">
                <button class="comment-edit">edit</button>
                ${a()}
              </div>
            </div>
          </div>
          <p class="reply-text">${n.body||""}</p>
          <div class="reply-action">
            <p class="posted-time">${f(n.created)}</p>
              <button class="like">like</button>
              <button class="reply-to">reply</button>
              <p class="likes">5 likes</p>
            </div>       
        </div>
      </div>`}).join("")}</div>`,f=e=>{const o=new Date(e),a=new Date-o,r=Math.floor(a/(1e3*60)),s=Math.floor(r/60);return r<1?"just now":r<60?`${r}m `:s<24?`${s}h `:`${Math.floor(s/24)}d`};return`
    <div class="post" id="${t?.id}">
        ${i(t)}
        ${l(t)}
        <div class="post-body">
          ${u(t)}
          <div class="post-text-wrapper">
            ${g(t)}
            </div>
            <div class="comment-section">
            ${w(t)}
            </div>
            <div class="input-wrapper">
            ${$("")}
          </div>
        </div>
    </div>
  `};function B(t){return{id:t.id,title:t.title,body:t.body,created:t.created,updated:t.updated,author:{name:t.author?.name??"Unknown",email:t.author?.email??"",bio:t.author?.bio??"",avatar:t.author?.avatar?.url??"",banner:t.author?.banner?.url??""},media:{url:t.media?.url??"",alt:t.media?.alt??""},tags:Array.isArray(t.tags)?t.tags:[],reactions:Array.isArray(t.reactions)?t.reactions:[],reactionCount:t._count?.reactions??0,commentCount:t._count?.comments??0,comments:Array.isArray(t.comments)?t.comments.map(i=>({id:i.id,body:i.body,created:i.created,replyToId:i.replyToId??null,postId:t.id,author:{name:i.author?.name??"Anonymous",email:i.author?.email??"",bio:i.author?.bio??"",avatar:{url:i.author?.avatar?.url??"",alt:i.author?.avatar?.alt??""}},banner:{url:i.author?.banner?.url??"",alt:i.author?.banner?.alt??""}})):[]}}export{B as f,P as g,D as p};
