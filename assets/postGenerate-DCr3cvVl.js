import{b,c as g}from"./main-DQ8NZTdO.js";async function E(o){try{if(!(await fetch(`${b}/${o}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${g}`}})).ok)throw new Error("Post deletion failed")}catch(c){console.error("Error deleting post:",c)}}async function k(o,c){try{if(!(await fetch(`${b}/${o}/comment/${c}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${g}`}})).ok)throw new Error("Comment deletion failed")}catch(d){console.error("Error deleting comment:",d)}}async function C(o,c){try{const d=await fetch(`${b}/${o}/react/${c}`,{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${g}`}});if(!d.ok)throw new Error("Like failed");console.log("Like successful",d),location.reload()}catch(d){console.error(d)}}async function I(o,c,d=null){try{const m={body:c};d&&(m.replyToId=Number(d));const u=await fetch(`${b}/${o}/comment`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${g}`},body:JSON.stringify(m)});if(!u.ok)throw new Error("Comment submission failed");return await u.json()}catch(m){console.error("Error submitting comment:",m)}}const P=()=>{(()=>{const r=document.querySelectorAll(".profile-wrapper"),e=()=>{const t=localStorage.getItem("profile"),s=JSON.parse(t).name,i=new URLSearchParams(window.location.search).get("username");return s===i?`
                <button class="profile-edit">⋯</button>
                <div class="profile-edit-wrapper">
                  <button class="edit">edit</button>
                  <button class="delete">delete</button>
                </div>
                `:""};r.forEach(t=>{const n=t.querySelector(".profile-edit");n.innerHTML=`${e()}`;const s=t.querySelector(".profile-edit-wrapper");n.addEventListener("click",l=>{l.preventDefault(),s.style.display==="flex"?s.style.display="none":s.style.display="flex"});const a=t.querySelector(".edit"),i=t.querySelector(".delete");a&&a.addEventListener("click",l=>{l.preventDefault();const p=t.closest(".post").id;window.location.href=`../posts/edit.html?id=${p}`}),i&&i.addEventListener("click",l=>{l.preventDefault();const p=t.closest(".post").id;confirm("Delete this post?")&&(E(p),window.location.href="../posts/feed.html")})})})(),document.querySelectorAll("#submit-post-comment").forEach(r=>{r.addEventListener("click",e=>{e.preventDefault();const t=r.closest(".post").id,n=r.closest(".input-wrapper").querySelector(".comment-input"),s=n.value.trim();s&&(console.log("Submitting comment:",t,s),I(t,s),n.value="")})}),(()=>{document.querySelectorAll(".reply-to").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const n=e.closest(".post").id,s=e.closest(".author-name-target").id,a=e.closest(".author-name-target").querySelector(".username").textContent,i=e.closest(".post").querySelector(".input-wrapper");i.innerHTML=w(a),i.dataset.replyTo=s;const l=i.querySelector("#submit-post-comment"),p=i.querySelector(".comment-input");l.addEventListener("click",h=>{h.preventDefault();const f=p.value.trim();f&&(console.log("Submitting reply:",n,f,s),I(n,f,s),i.innerHTML=w())})})})})(),document.querySelectorAll(".reaction-btns").forEach(r=>{r.addEventListener("mouseenter",()=>{const e=r.closest(".like-comments-wrapper").querySelector(".reaction-container");e.style.display="flex",r.querySelectorAll(".reaction-btn").forEach(n=>{n.addEventListener("click",s=>{s.preventDefault();const a=r.closest(".post").id,i=s.target.dataset.reactionType;C(a,i)})})}),r.addEventListener("mouseleave",()=>{const e=r.closest(".like-comments-wrapper").querySelector(".reaction-container");e.style.display="none"})}),document.querySelectorAll(".option-btn").forEach(r=>{r.addEventListener("click",e=>{e.preventDefault();const t=r.closest(".user-Info").querySelector(".option-btn-wrapper");t.style.display==="flex"?t.style.display="none":t.style.display="flex"})}),document.querySelectorAll(".comment-delete").forEach(r=>{r.addEventListener("click",e=>{e.preventDefault();const t=r.closest(".comment").id,n=r.closest(".post").id;console.log("Comment ID:",t,"Post ID:",n),confirm("Delete this comment?")&&k(n,t)})});const v=document.querySelectorAll(".close-reply-display");console.log("Close reply button:",v),v.forEach(r=>{r.addEventListener("click",e=>{e.preventDefault(),console.log("Close reply button clicked")})}),document.querySelectorAll(".username").forEach(r=>{r.addEventListener("click",e=>{e.preventDefault();const t=r.closest(".post").querySelector(".username").textContent;window.location.href=`../profile/user.html?username=${t}`})}),document.querySelectorAll(".post-image").forEach(r=>{r.addEventListener("click",e=>{e.preventDefault();const t=r.closest(".post").id;window.location.href=`../posts/view.html?id=${t}`})})},w=(o="")=>`
      ${o?`
      <div class="display-replying">
      <button class="close-reply-display">⨉</button>
      <p>replying to: @${o}</p>
      </div>
      `:""}
      <input class="comment-input" type="text" placeholder="Add a comment..." />
      <div class="submit-wrapper">
        <button id="submit-post-comment" class="submit">submit</button>
      </div>
    `,A=o=>{const c=e=>`
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
      `,d=e=>{let t=e.media?.url||"../src/assets/images/no_img.png",n=e.media?.alt||"Post Image";return`
            <div class="post-image">
              <img src="${t}" alt="${n}" />
            </div>
      `},m=e=>{let t=e.author.avatar.url||"../src/assets/images/no_img.png",n=e.author.avatar.alt||"Post Image";return`
            <div class="post-image">
              <img src="${t}" alt="${n}" />
            </div>
      `},u=e=>{const t=e.comments,n=(e.reactions||[]).map(i=>({emoji:i?.symbol||"❓",count:i?.count||0,reactors:i?.reactors||[]}));let s="",a="";if(n.length===0?s='<button><i class="fa-regular fa-heart"></i></button>':a=n.map(i=>`<span class="reaction-item">${i.count} ${i.emoji}</span>`).join(" "),e||t)return`
        <div class="like-comments-wrapper">
          <div class="like-comments">
            <div class="reaction-btns">
              ${s}
              <div class="view-post-likes">
                ${a}
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
            <div class="posted-time">${y(e.created)}</div>
          </div>
        </div>
      `},$=e=>`
                <p class="post-text">
                ${e.body||""}
                </p>
      `,v=e=>{const t=e.comments;return`<div class="post-comments">${(e.comments.filter(a=>a.replyToId===null)||[]).map(a=>{const i=()=>{const l=localStorage.getItem("profile"),h=JSON.parse(l).name,f=a.author.name;return h===f?'<button class="comment-delete">delete</button>':""};return`
                <div class="author-name-target comment" id="${a.id}">
                  <div class="comment-profile">
                    ${m(a)}
                  </div>
                  <div class="comment-body">
                    <div class="user-Info comment-username-wrapper">
                      <div class="comment-username">
                      <p class="username">${a.author.name}</p>
                      </div>
                      <div class="comment-option">
                        <button class="option-btn">⋯</button>
                        <div class="option-btn-wrapper">
                          <button class="top-comment-edit">edit</button>
                          ${i()}
                          </div>
                      </div>
                    </div>
                    <div class="comment-text-wrapper">
                      <p class="comment-text">
                        ${a.body||""}
                      </p>
                      <div class="comment-action">
                        <p class="posted-time">${y(a.created)}</p>
                        <button class="like">like</button>
                        <button class="reply-to">reply</button>
                        <p class="likes">5 likes</p>
                      </div>
                    </div>
                    <div class="reply-section">
                    ${S(t.filter(l=>l.replyToId===a.id))}
                    </div>
                  </div>
                </div>
        `}).join("")}</div>`},S=e=>`<div class="post-comments">${(e||[]).map(n=>{const s=()=>{const a=localStorage.getItem("profile"),l=JSON.parse(a).name,p=n.author.name;return l===p?'<button class="comment-delete">delete</button>':""};return`
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
                ${s()}
              </div>
            </div>
          </div>
          <p class="reply-text">${n.body||""}</p>
          <div class="reply-action">
            <p class="posted-time">${y(n.created)}</p>
              <button class="like">like</button>
              <button class="reply-to">reply</button>
              <p class="likes">5 likes</p>
            </div>       
        </div>
      </div>`}).join("")}</div>`,y=e=>{const t=new Date(e),s=new Date-t,a=Math.floor(s/(1e3*60)),i=Math.floor(a/60);return a<1?"just now":a<60?`${a}m `:i<24?`${i}h `:`${Math.floor(i/24)}d`};return`
    <div class="post" id="${o?.id}">
        ${c(o)}
        ${d(o)}
        <div class="post-body">
          ${u(o)}
          <div class="post-text-wrapper">
            ${$(o)}
            </div>
            <div class="comment-section">
            ${v(o)}
            </div>
            <div class="input-wrapper">
            ${w("")}
          </div>
        </div>
    </div>
  `};function L(o){return{id:o.id,title:o.title,body:o.body,created:o.created,updated:o.updated,author:{name:o.author.name,email:o.author.email,bio:o.author.bio,avatar:o.author.avatar.url,banner:o.author.banner.url},media:{url:o.media?.url,alt:o.media?.alt},tags:o.tags,reactions:o.reactions,reactionCount:o._count.reactions,commentCount:o._count.comments,comments:o.comments.map(c=>({id:c.id,body:c.body,created:c.created,replyToId:c.replyToId??null,postId:o.id,author:{name:c.author.name,email:c.author.email,bio:c.author.bio,avatar:{url:c.author.avatar.url,alt:c.author.avatar.alt}},banner:{url:c.author.banner.url,alt:c.author.banner.alt}}))}}export{L as f,A as g,P as p};
