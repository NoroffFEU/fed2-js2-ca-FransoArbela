import{c as l,d}from"./main-BKDZr5q_.js";const m=(e="")=>`
      ${e?`
      <div class="display-replying">
      <button class="close-reply-display">⨉</button>
      <p>replying to: @${e}</p>
      </div>
      `:""}
      <input class="comment-input" type="text" placeholder="Add a comment..." />
      <div class="submit-wrapper">
        <button id="submit-post-comment" class="submit">submit</button>
      </div>
    `,h=e=>`
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
    `,v=e=>{let t=e.media?.url||"../src/assets/images/no_img.png",o=e.media?.alt||"Post Image";return`
          <div class="post-image">
            <img src="${t}" alt="${o}" />
          </div>
    `},b=(e,t)=>{const o=[e],n=[];for(;o.length;){const s=o.pop(),r=t.filter(a=>a.replyToId===s);n.push(...r),o.push(...r.map(a=>a.id))}return n},y=e=>{let t=e.author.avatar.url||"../src/assets/images/no_img.png",o=e.author.avatar.alt||"Post Image";return`
          <div class="post-image">
            <img src="${t}" alt="${o}" />
          </div>
    `},g=e=>{const t=e.comments,o=(e.reactions||[]).map(r=>({emoji:r?.symbol||"❓",count:r?.count||0,reactors:r?.reactors||[]}));let n="",s="";if(o.length===0?n='<button><i class="fa-regular fa-heart"></i></button>':s=o.map(r=>`<span class="reaction-item">${r.count} ${r.emoji}</span>`).join(" "),e||t)return`
      <div class="like-comments-wrapper">
        <div class="like-comments">
          <div class="reaction-btns">
            ${n}
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
          <div class="posted-time">${u(e.created)}</div>
        </div>
      </div>
    `},S=e=>`
              <p class="post-text">
              ${e.body||""}
              </p>
    `,w=(e,t)=>{const o=()=>{const n=localStorage.getItem("profile"),r=JSON.parse(n).name,a=e.author.name;return r===a?'<button class="comment-delete">delete</button>':""};return`
    <div class="author-name-target comment" id="${e.id}">
      <div class="comment-profile">
        ${y(e)}
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
              ${o()}
            </div>
          </div>
        </div>
        <div class="comment-text-wrapper">
          <p class="comment-text">${e.body||""}</p>
          <div class="comment-action">
            <p class="posted-time">${u(e.created)}</p>
            <button class="like">like</button>
            <button class="reply-to">reply</button>
            <p class="likes">5 likes</p>
          </div>
        </div>
        <div class="reply-section">
          ${$(b(e.id,t))}
        </div>
      </div>
    </div>
  `},$=e=>{const t=n=>{const r=JSON.parse(localStorage.getItem("allComments")||"[]").find(a=>a.id===n);return r?r.author.name:"unknown"};return`<div class="post-comments">${(e||[]).map(n=>{const s=()=>{const r=localStorage.getItem("profile"),c=JSON.parse(r).name,i=n.author.name;return c===i?'<button class="comment-delete">delete</button>':""};return`
       <div class="author-name-target reply" id="${n.id}">
      <div class="reply-profile">
        ${y(n)}
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
          <p class="reply-text">
            <span class="mention">@${t(n.replyToId)}</span> ${n.body||""}
          </p>
          <div class="reply-action">
          <p class="posted-time">${u(n.created)}</p>
            <button class="like">like</button>
            <button class="reply-to">reply</button>
            <p class="likes">5 likes</p>
          </div>       
      </div>
    </div>`}).join("")}</div>`},u=e=>{const t=new Date(e),n=new Date-t,s=Math.floor(n/(1e3*60)),r=Math.floor(s/60);return s<1?"just now":s<60?`${s}m `:r<24?`${r}h `:`${Math.floor(r/24)}d`},B=e=>`
    <div class="post" id="${e?.id}">
        ${h(e)}
        ${v(e)}
        <div class="post-body">
          ${g(e)}
          <div class="post-text-wrapper">
            ${S(e)}
            </div>
            <div class="comment-section">
            ${w(e)}
            </div>
            <div class="input-wrapper">
            ${m("")}
          </div>
        </div>
    </div>
  `;function R(e){return{id:e.id,title:e.title,body:e.body,created:e.created,updated:e.updated,author:{name:e.author?.name??"Unknown",email:e.author?.email??"",bio:e.author?.bio??"",avatar:e.author?.avatar?.url??"",banner:e.author?.banner?.url??""},media:{url:e.media?.url??"",alt:e.media?.alt??""},tags:Array.isArray(e.tags)?e.tags:[],reactions:Array.isArray(e.reactions)?e.reactions:[],reactionCount:e._count?.reactions??0,commentCount:e._count?.comments??0,comments:Array.isArray(e.comments)?e.comments.map(t=>({id:t.id,body:t.body,created:t.created,replyToId:t.replyToId??null,postId:e.id,author:{name:t.author?.name??"Anonymous",email:t.author?.email??"",bio:t.author?.bio??"",avatar:{url:t.author?.avatar?.url??"",alt:t.author?.avatar?.alt??""}},banner:{url:t.author?.banner?.url??"",alt:t.author?.banner?.alt??""}})):[]}}async function I(e){try{if(!(await fetch(`${l}/${e}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${d}`}})).ok)throw new Error("Post deletion failed")}catch(t){console.error("Error deleting post:",t)}}async function k(e,t){try{if(!(await fetch(`${l}/${e}/comment/${t}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${d}`}})).ok)throw new Error("Comment deletion failed")}catch(o){console.error("Error deleting comment:",o)}}async function C(e,t){try{const o=await fetch(`${l}/${e}/react/${t}`,{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${d}`}});if(!o.ok)throw new Error("Like failed");console.log("Like successful",o),location.reload()}catch(o){console.error(o)}}async function p(e,t,o=null){try{const n={body:t};o&&(n.replyToId=Number(o));const s=await fetch(`${l}/${e}/comment`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${d}`},body:JSON.stringify(n)});if(!s.ok)throw new Error("Comment submission failed");return await s.json()}catch(n){console.error("Error submitting comment:",n)}}const A=()=>JSON.parse(localStorage.getItem("profile"))?.name,q=()=>{const e=A(),t=new URLSearchParams(window.location.search).get("username");document.querySelectorAll(".profile-wrapper").forEach(o=>{const n=o.closest(".post"),s=n.id;if(e!==t)return;o.querySelector(".profile-edit").innerHTML=`
      <button class="profile-edit-btn">⋯</button>
      <div class="profile-edit-wrapper" style="display: none;">
        <button class="edit">edit</button>
        <button class="delete">delete</button>
      </div>
    `;const r=o.querySelector(".profile-edit-wrapper");o.querySelector(".profile-edit-btn").onclick=()=>r.style.display=r.style.display==="flex"?"none":"flex",o.querySelector(".edit").onclick=()=>{window.location.href=`../posts/update.html?id=${s}`},o.querySelector(".delete").onclick=async()=>{confirm("Delete this post?")&&(await I(s),n.remove())}})},T=()=>{document.querySelectorAll("#submit-post-comment").forEach(e=>{e.addEventListener("click",async t=>{t.preventDefault();const o=e.closest(".post"),n=o.id,s=o.querySelector(".comment-input"),r=s.value.trim(),a=o.querySelector(".input-wrapper")?.dataset.replyTo;if(!r)return;const c=await p(n,r,a);o.querySelector(".comment-section").insertAdjacentHTML("beforeend",c),s.value=""})})},E=()=>{document.querySelectorAll(".reply-to").forEach(e=>{e.onclick=t=>{t.preventDefault();const o=e.closest(".author-name-target"),n=e.closest(".post"),s=o.id,r=o.querySelector(".username").textContent,a=n.querySelector(".input-wrapper");a.innerHTML=m(r),a.dataset.replyTo=s,a.querySelector("#submit-post-comment").onclick=async c=>{c.preventDefault();const i=a.querySelector(".comment-input").value.trim();if(!i)return;const f=await p(n.id,i,s);o.querySelector(".reply-section").insertAdjacentHTML("beforeend",f),a.innerHTML=m()}}})},P=()=>{document.querySelectorAll(".reaction-btns").forEach(e=>{const t=e.closest(".like-comments-wrapper").querySelector(".reaction-container");e.onmouseenter=()=>t.style.display="flex",e.onmouseleave=()=>t.style.display="none",e.querySelectorAll(".reaction-btn").forEach(o=>{o.onclick=async n=>{n.preventDefault(),await C(e.closest(".post").id,o.dataset.reactionType)}})})},D=()=>{document.querySelectorAll(".option-btn").forEach(e=>{e.onclick=()=>{const t=e.closest(".user-Info").querySelector(".option-btn-wrapper");t.style.display=t.style.display==="flex"?"none":"flex"}})},L=()=>{document.querySelectorAll(".comment-delete").forEach(e=>{e.onclick=async()=>{const t=e.closest(".author-name-target"),o=e.closest(".post").id,n=t.id;confirm("Delete this comment?")&&(await k(o,n),t.remove())}})},N=()=>{document.querySelectorAll(".username").forEach(e=>{e.onclick=t=>{t.preventDefault();const o=e.textContent;window.location.href=`../profile/user.html?username=${o}`}})},x=()=>{document.querySelectorAll(".post-image").forEach(e=>{e.onclick=t=>{t.preventDefault();const o=e.closest(".post").id;window.location.href=`../posts/view.html?id=${o}`}})},M=()=>{document.querySelectorAll(".post").forEach(e=>{const t=e.querySelector(".commentsBtn"),o=e.querySelector(".comment-section");t.onclick=()=>{const n=o.style.display==="block";o.style.display=n?"none":"block",t.textContent=n?"comments":"hide comments"}})};submitBtn.addEventListener("click",async e=>{e.preventDefault();const t=commentInput.value.trim();if(!t)return;const o=await p(postId,t,commentId);if(!o)return;const n=JSON.parse(localStorage.getItem("allComments"))||[];n.push(o),localStorage.setItem("allComments",JSON.stringify(n));const s=post.querySelector(".comment-section"),r=createSingleCommentHTML(o,n);s.insertAdjacentHTML("beforeend",r),commentInput.value=""});const H=()=>{document.querySelectorAll(".author-name-target.comment").forEach(e=>{const t=e.querySelector(".reply-section"),o=t?.querySelectorAll(".reply");if(!o||o.length===0){t.style.display="none";return}const n=document.createElement("button");n.className="show-reply-btn",n.textContent=`Show ${o.length} repl${o.length===1?"y":"ies"}`,e.querySelector(".comment-action").appendChild(n),n.onclick=()=>{const s=t.style.display==="block";t.style.display=s?"none":"block",n.textContent=`${s?"Show":"Hide"} ${o.length} repl${o.length===1?"y":"ies"}`},t.style.display="none"})},j=()=>{q(),T(),E(),P(),D(),L(),N(),x(),M(),H()};export{R as f,B as g,j as p};
