import{c as h,d as b}from"./main-BBH5nOCb.js";async function E(t){try{if(!(await fetch(`${h}/${t}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${b}`}})).ok)throw new Error("Post deletion failed");location.reload()}catch(c){console.error("Error deleting post:",c)}}async function k(t,c){try{if(!(await fetch(`${h}/${t}/comment/${c}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${b}`}})).ok)throw new Error("Comment deletion failed");location.reload()}catch(d){console.error("Error deleting comment:",d)}}async function A(t,c){try{const d=await fetch(`${h}/${t}/react/${c}`,{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${b}`}});if(!d.ok)throw new Error("Like failed");console.log("Like successful",d),location.reload()}catch(d){console.error(d)}}async function I(t,c,d=null){try{const m={body:c};d&&(m.replyToId=Number(d));const u=await fetch(`${h}/${t}/comment`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${b}`},body:JSON.stringify(m)});if(!u.ok)throw new Error("Comment submission failed");return window.location.reload(),await u.json()}catch(m){console.error("Error submitting comment:",m)}}const D=()=>{(()=>{const r=document.querySelectorAll(".profile-wrapper"),e=()=>{const o=localStorage.getItem("profile"),i=JSON.parse(o).name,a=new URLSearchParams(window.location.search).get("username");return i===a?`
                <button class="profile-edit">⋯</button>
                <div class="profile-edit-wrapper">
                  <button class="edit">edit</button>
                  <button class="delete">delete</button>
                </div>
                `:""};r.forEach(o=>{const n=o.querySelector(".profile-edit");n.innerHTML=`${e()}`;const i=o.querySelector(".profile-edit-wrapper");n.addEventListener("click",l=>{l.preventDefault(),i.style.display==="flex"?i.style.display="none":i.style.display="flex"});const s=o.querySelector(".edit"),a=o.querySelector(".delete");s&&s.addEventListener("click",l=>{l.preventDefault();const p=o.closest(".post").id;window.location.href=`../posts/edit.html?id=${p}`}),a&&a.addEventListener("click",l=>{l.preventDefault();const p=o.closest(".post").id;confirm("Delete this post?")&&(E(p),window.location.href="../posts/feed.html")})})})(),document.querySelectorAll("#submit-post-comment").forEach(r=>{r.addEventListener("click",e=>{e.preventDefault();const o=r.closest(".post").id,n=r.closest(".input-wrapper").querySelector(".comment-input"),i=n.value.trim();i&&(I(o,i),n.value="")})}),(()=>{document.querySelectorAll(".reply-to").forEach(e=>{e.addEventListener("click",o=>{o.preventDefault();const n=e.closest(".post").id,i=e.closest(".author-name-target").id,s=e.closest(".author-name-target").querySelector(".username").textContent,a=e.closest(".post").querySelector(".input-wrapper");a.innerHTML=$(s),a.dataset.replyTo=i;const l=a.querySelector("#submit-post-comment"),p=a.querySelector(".comment-input");l.addEventListener("click",v=>{v.preventDefault();const y=p.value.trim();y&&(I(n,y,i),a.innerHTML=$())})})})})(),document.querySelectorAll(".reaction-btns").forEach(r=>{r.addEventListener("mouseenter",()=>{const e=r.closest(".like-comments-wrapper").querySelector(".reaction-container");e.style.display="flex",r.querySelectorAll(".reaction-btn").forEach(n=>{n.addEventListener("click",i=>{i.preventDefault();const s=r.closest(".post").id,a=i.target.dataset.reactionType;A(s,a)})})}),r.addEventListener("mouseleave",()=>{const e=r.closest(".like-comments-wrapper").querySelector(".reaction-container");e.style.display="none"})}),document.querySelectorAll(".option-btn").forEach(r=>{r.addEventListener("click",e=>{e.preventDefault();const o=r.closest(".user-Info").querySelector(".option-btn-wrapper");o.style.display==="flex"?o.style.display="none":o.style.display="flex"})}),document.querySelectorAll(".comment-delete").forEach(r=>{r.addEventListener("click",e=>{e.preventDefault();const o=r.closest(".author-name-target").id,n=r.closest(".post").id;confirm("Delete this comment?")&&k(n,o)})}),document.querySelectorAll(".close-reply-display").forEach(r=>{r.addEventListener("click",e=>{e.preventDefault()})}),document.querySelectorAll(".username").forEach(r=>{r.addEventListener("click",e=>{e.preventDefault();const o=r.closest(".post").querySelector(".username").textContent;window.location.href=`../profile/user.html?username=${o}`})}),document.querySelectorAll(".post-image").forEach(r=>{r.addEventListener("click",e=>{e.preventDefault();const o=r.closest(".post").id;window.location.href=`../posts/view.html?id=${o}`})})},$=(t="")=>`
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
    `,P=t=>{const c=e=>`
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
      `,d=e=>{let o=e.media?.url||"../src/assets/images/no_img.png",n=e.media?.alt||"Post Image";return`
            <div class="post-image">
              <img src="${o}" alt="${n}" />
            </div>
      `},m=e=>{let o=e.author.avatar.url||"../src/assets/images/no_img.png",n=e.author.avatar.alt||"Post Image";return`
            <div class="post-image">
              <img src="${o}" alt="${n}" />
            </div>
      `},u=e=>{const o=e.comments,n=(e.reactions||[]).map(a=>({emoji:a?.symbol||"❓",count:a?.count||0,reactors:a?.reactors||[]}));let i="",s="";if(n.length===0?i='<button><i class="fa-regular fa-heart"></i></button>':s=n.map(a=>`<span class="reaction-item">${a.count} ${a.emoji}</span>`).join(" "),e||o)return`
        <div class="like-comments-wrapper">
          <div class="like-comments">
            <div class="reaction-btns">
              ${i}
              <div class="view-post-likes">
                ${s}
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
      `,w=e=>{const o=e.comments;return`<div class="post-comments">${(e.comments.filter(s=>s.replyToId===null)||[]).map(s=>{const a=()=>{const l=localStorage.getItem("profile"),v=JSON.parse(l).name,y=s.author.name;return v===y?'<button class="comment-delete">delete</button>':""};return`
                <div class="author-name-target comment" id="${s.id}">
                  <div class="comment-profile">
                    ${m(s)}
                  </div>
                  <div class="comment-body">
                    <div class="user-Info comment-username-wrapper">
                      <div class="comment-username">
                      <p class="username">${s.author.name}</p>
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
                        ${s.body||""}
                      </p>
                      <div class="comment-action">
                        <p class="posted-time">${f(s.created)}</p>
                        <button class="like">like</button>
                        <button class="reply-to">reply</button>
                        <p class="likes">5 likes</p>
                      </div>
                    </div>
                    <div class="reply-section">
                    ${S(o.filter(l=>l.replyToId===s.id))}
                    </div>
                  </div>
                </div>
        `}).join("")}</div>`},S=e=>`<div class="post-comments">${(e||[]).map(n=>{const i=()=>{const s=localStorage.getItem("profile"),l=JSON.parse(s).name,p=n.author.name;return l===p?'<button class="comment-delete">delete</button>':""};return`
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
                ${i()}
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
      </div>`}).join("")}</div>`,f=e=>{const o=new Date(e),i=new Date-o,s=Math.floor(i/(1e3*60)),a=Math.floor(s/60);return s<1?"just now":s<60?`${s}m `:a<24?`${a}h `:`${Math.floor(a/24)}d`};return`
    <div class="post" id="${t?.id}">
        ${c(t)}
        ${d(t)}
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
  `};function L(t){return{id:t.id,title:t.title,body:t.body,created:t.created,updated:t.updated,author:{name:t.author?.name??"Unknown",email:t.author?.email??"",bio:t.author?.bio??"",avatar:t.author?.avatar?.url??"",banner:t.author?.banner?.url??""},media:{url:t.media?.url??"",alt:t.media?.alt??""},tags:Array.isArray(t.tags)?t.tags:[],reactions:Array.isArray(t.reactions)?t.reactions:[],reactionCount:t._count?.reactions??0,commentCount:t._count?.comments??0,comments:Array.isArray(t.comments)?t.comments.map(c=>({id:c.id,body:c.body,created:c.created,replyToId:c.replyToId??null,postId:t.id,author:{name:c.author?.name??"Anonymous",email:c.author?.email??"",bio:c.author?.bio??"",avatar:{url:c.author?.avatar?.url??"",alt:c.author?.avatar?.alt??""}},banner:{url:c.author?.banner?.url??"",alt:c.author?.banner?.alt??""}})):[]}}export{L as f,P as g,D as p};
