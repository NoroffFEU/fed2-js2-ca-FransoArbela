import{a as b}from"./authGuard-BjwX1WRu.js";import{b as E}from"./read-B-70DzHL.js";import{b as s,c as m}from"./main-etE6r0Nb.js";async function g(e,t){try{if(!(await fetch(`${s}/${e}/comment/${t}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${m}`}})).ok)throw new Error("Comment deletion failed")}catch(o){console.error("Error deleting comment:",o)}}async function u(e,t,o=null){try{const n={body:t};o&&(n.replyToId=Number(o));const a=await fetch(`${s}/${e}/comment`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${m}`},body:JSON.stringify(n)});if(!a.ok)throw new Error("Comment submission failed");const r=await a.json();location.reload()}catch(n){console.error("Error submitting comment:",n)}}b();const S=JSON.parse(localStorage.getItem("profile")),p=S.name,y=new URLSearchParams(window.location.search),f=y.get("id"),v=y.get("username");E(f).then(e=>{const t=N(e),o=document.querySelector(".post"),n=document.querySelector(".post-img"),a=document.querySelector(".post-body"),r=t.author;T(r,t.body),p===v&&h();const i=$(t.media,t.title);n.appendChild(i),o.id=t.id;const l=A(t.comments);a.appendChild(l),B(t),x(t)});const d=document.querySelector(".profile-img"),I=document.querySelector(".profile-name"),C=document.querySelector(".post-text"),w=document.querySelector(".post-profile");function T(e,t){if(p===v){const o=h();w.appendChild(o)}d.src=e.avatar,d.alt=e.avatar.alt,I.textContent=e.name,C.textContent=t}function h(){const e=document.createElement("button");return e.textContent="Edit",e.addEventListener("click",()=>{let t=document.getElementById("edit-modal");t||(t=L(),document.body.appendChild(t)),t.classList.remove("hidden"),q(t)}),e}function L(){const e=document.createElement("div");return e.classList.add("modal"),e.setAttribute("id","edit-modal"),e.innerHTML=`
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <h2>Edit Post</h2>
      <textarea placeholder="Edit your post..."></textarea>
      <div class="modal-buttons-container">
        <button id="save-edit">Save</button>
        <button id="delete-post"><i class="fa-solid fa-trash" style="color: #f04242;"></i></button>
      </div>
    </div>
  `,e}function q(e){e.querySelector(".close-button").addEventListener("click",()=>{e.classList.add("hidden")})}function $(e,t){const o=document.createElement("img");return o.src=e.url,o.alt=t,o.classList.add("post-image","post-img"),o}function B(e){const t=document.querySelectorAll("#submit-reply"),o=document.querySelectorAll(".view-replies");t.forEach(n=>{const a=n.closest(".reply-input").querySelector("#comment-input");n.addEventListener("click",()=>{const r=n.closest(".comment").id;a.value.trim()!==""&&u(e.id,a.value,r)})}),o.forEach(n=>{n.addEventListener("click",()=>{const a=n.closest(".reply-name-and-body-wrapper")||n.closest(".reply-input-wrapper");if(!a){console.warn("No reply wrapper found for button:",n);return}const r=a.querySelector(".reply-input"),i=r?.querySelector("#comment-input"),l=a.querySelector(".reply-name")?.textContent||a.closest(".comment-and-replies")?.querySelector(".comment-name")?.textContent;i&&l?(i.value=`@${l} `,r.style.display=r.style.display==="none"?"flex":"none"):console.warn("Reply input or reply-to name not found for button:",n)})})}function x(e){document.querySelectorAll(".delete-comment-btn").forEach(o=>{o.addEventListener("click",async()=>{if(!confirm("Delete this comment?"))return;const a=P(o);if(!a){console.warn("Couldn't find comment or reply ID.");return}await g(e.id,a),location.reload()})})}function P(e){const t=e.closest(".reply"),o=e.closest(".comment");return t?t.id:o?o.id:null}function A(e){const t=document.createElement("div");t.classList.add("comment-section");const o=R(e);return e.forEach(n=>{if(n.replyToId===null){const a=k(n,o);t.appendChild(a)}}),t}function R(e){return e.reduce((t,o)=>(o.replyToId!==null&&(t[o.replyToId]||(t[o.replyToId]=[]),t[o.replyToId].push(o)),t),{})}function k(e,t){const o=document.createElement("div");o.classList.add("comment"),o.id=e.id,o.innerHTML=`
    <div class="comment-wrapper">
      <div class="comment-and-replies">
          <div class="top-comment">
          

      <div class="comment-profile-img">
       <img src="${e.author.avatar.url}" alt="${e.author.avatar.alt}" class="profile-img" />
      </div>
        <div class="comment-name-and-body-wrapper">
          <div class="comment-name">${e.author.name}</div>
          <div class="comment-text-and-delete">
            <div class="comment-body"><p>${e.body}</p></div>
          </div>

          </div>
        </div>
        <div class="reply-section"></div>
        <div class="reply-input-wrapper">
          <div class="reply-input">
            <input id="comment-input" type="text" placeholder="Reply..." />
            <button id="submit-reply">submit</button>
          </div>
         <button class="view-replies">reply</button>
        </div>
      </div>

      <button data-id="${e.id}" class="delete-comment-btn"><i class="fa-solid fa-trash" style="color: #f04242;"></i></button>

    </div>
  `;const n=o.querySelector(".reply-section");return(t[e.id]||[]).forEach(r=>{const i=M(r);n.appendChild(i)}),o}function M(e){const t=document.createElement("div");return t.classList.add("reply"),t.id=e.id,t.innerHTML=`
    <div class="reply-wrapper">
      <div class="reply-profile-img">
        <img src="${e.author.avatar?.url||"../src/assets/images/no_img.png"}" alt="${e.author.avatar?.alt||"Profile Image"}" class="profile-img" />
      </div>
      <div class="reply-name-and-body">
        <div class="reply-name-and-body-wrapper">
          <div class="reply-name">${e.author.name}</div>
          <div class="reply-text-and-delete">
            <div class="reply-body"><p>${e.body}</p></div>
          </div>
          <div class="reply-input">
            <input id="comment-input" type="text" placeholder="Reply..." />
            <button id="submit-reply">submit</button>
          </div>
          <button class="view-replies">reply</button>
        </div>
      </div>
       <button class="delete-comment-btn"><i class="fa-solid fa-trash" style="color: #f04242;"></i></button>
    </div>
  `,t}function N(e){return{id:e.data.id,title:e.data.title,body:e.data.body,created:e.data.created,updated:e.data.updated,author:{name:e.data.author.name,email:e.data.author.email,bio:e.data.author.bio,avatar:e.data.author.avatar.url,banner:e.data.author.banner.url},media:{url:e.data.media.url,alt:e.data.media.alt},tags:e.data.tags,reactions:e.data.reactions,reactionCount:e.data._count.reactions,commentCount:e.data._count.comments,comments:e.data.comments.map(t=>({id:t.id,body:t.body,created:t.created,replyToId:t.replyToId??null,postId:e.data.id,author:{name:t.author.name,email:e.data.author.email,bio:e.data.author.bio,avatar:{url:t.author.avatar.url,alt:"avatar"}},banner:{url:e.data.author.banner.url,alt:"banner"}}))}}const c=document.querySelector("#input-post-comment"),D=document.querySelector("#submit-post-comment");D.addEventListener("click",()=>{c.value.trim()!==""&&u(f,c.value)});
