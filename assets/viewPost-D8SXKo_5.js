import{a as b}from"./authGuard-BjwX1WRu.js";import{c as $,a as E}from"./read-Cz_gz5MC.js";import{b as d,c as l}from"./main-ByXIHHOD.js";async function I(t,o){try{const e=await fetch(`${d}/${t}/comment`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${l}`},body:JSON.stringify({body:o})});if(!e.ok)throw new Error("Comment submission failed");console.log("Comment submitted successfully",e);const n=await e.json();console.log("Comment data:",n),location.reload()}catch(e){console.error("Error submitting comment:",e)}}async function S(t,o){try{if(!(await fetch(`${d}/${t}/comment/${o}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${l}`}})).ok)throw new Error("Comment deletion failed");location.reload()}catch(e){console.error("Error deleting comment:",e)}}b();const L=JSON.parse(localStorage.getItem("profile")),w=L.name,u=new URLSearchParams(window.location.search),C=u.get("id"),p=u.get("username"),P=w===p?T():"";function T(){return`
    <div class="edit-btn">
      <button></button>
    </div>`}function k(t,o){return t?`<img class="post-img" src="${t.url}" alt="${o}">`:'<img class="post-img" src="../src/assets/images/no_img.png" alt="">'}function A(t){return`
    <div class="profile-container">
      <img src="${t.avatar.url}" alt="${t.avatar.alt}">
      <div class="profile-details">
        <h3>${t.name}</h3>
      </div>
      ${P}
    </div>`}function B(t,o,e,n,s,i){return`
    <div id="image-modal" class="hidden">
      <span id="close-modal">&times;</span>
      <img id="modal-img" src="" alt="" />
    </div>
    <div class="post-img-wrapper">${o}</div>

    <div class="post-details-wrapper">

      <div class="post-details">
        <div class="profile"></div>
        <h4>${t.title}</h4>
        <p>${t.body}</p>
      </div>

      <div class="post-reactions">
        <button id="comment-counter">Comments: ${n}</button>
        <button id="comment-counter">${i} ${e}</button>
      </div>

      <div class="post-actions">

      <div class="comment-section">
      ${s}
      </div>
       <div class="post-comment-input">
      <input name="commentInput" type="text" class="comment-input" placeholder="Add a comment...">
      <button class="comment-submit">Submit</button>
    </div>
    </div>
`}function M(){document.querySelectorAll(".post-img").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation();const e=document.getElementById("image-modal"),n=document.getElementById("modal-img");n.src=t.src,e.classList.remove("hidden")})}),document.getElementById("close-modal").addEventListener("click",()=>{document.getElementById("image-modal").classList.add("hidden")}),document.getElementById("image-modal").addEventListener("click",t=>{t.target.id==="image-modal"&&t.currentTarget.classList.add("hidden")})}function q(){$(C).then(t=>{const o=document.querySelector(".post");o.setAttribute("id",t.data.id);const e=t.data,n=k(e.media,e.title),s=e._count.reactions||0,i=e._count.comments||0;t.data.comments.map(c=>c.id);const g=H(e.comments),f=e.reactions.filter(c=>c.count>0).map(c=>c.symbol).join(" ");o.innerHTML=B(e,n,s,i,g,f),document.querySelectorAll(".comment-edit").forEach(c=>{c.addEventListener("click",y=>{if(confirm("Are you sure you want to delete this comment?")){const m=y.target.closest(".comment")?.id,r=e.id;console.log("Edit clicked",{postId:r,commentId:m}),S(r,m)}})});const a=document.querySelector(".comment-input"),v=document.querySelector(".comment-submit"),h=e.id;v.addEventListener("click",()=>{console.log("click"),a.value.trim()===""?console.log("Comment input is empty"):I(h,a.value)}),M(),_()})}function H(t){return console.log("comments",t),t.length?t.map(o=>`
    <div id="${o.id}" class="comment">
      <div class="comment-header">
        <img class="comment-profile-img" src="${o.author.avatar.url}" alt="${o.author.name}">
      </div>
      
      <div class="comment-body">
        <div class="comment-author-info">
          <p class="comment-author-name">${o.author.name}</p>
          <p class="comment-text">${o.body}</p>
          <button class="comment-reply">Reply</button>
          <button class="comment-edit bg-red-500">delete</button>
         </div>
         <div class="comment-actions">
        <button class="comment-reaction">👍</button>
      </div>
      </div>
    </div>
    `).join(""):'<p class="comments">No comments yet</p>'}function _(){E(p).then(t=>{const o=document.querySelector(".profile");o.innerHTML=A(t.data)})}q();
