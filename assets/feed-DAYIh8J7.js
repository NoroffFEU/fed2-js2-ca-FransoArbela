import{B as m}from"./main-ByXIHHOD.js";import{r as l,a as u}from"./read-Cz_gz5MC.js";import{a as d}from"./authGuard-BjwX1WRu.js";d();function p(){f(),y()}function f(){l(14,1).then(e=>{const t=document.querySelector(".posts");e.data.forEach(o=>{const n=v(o);t.appendChild(n)})})}function v(e){const t=document.createElement("div");t.classList.add("post"),t.setAttribute("id",e.id);const o=e._count.comments||0,n=e._count.reactions||0,c=e.reactions.filter(s=>s.count>0).map(s=>s.symbol).join(""),r=g(e.comments),i=h(e.media?.url,e.title);return t.innerHTML=`
    <div class="post-header">
      <img class="profile-img" src="${e.author.avatar.url}" alt="${e.title}">
      <p>${e.author.name}</p>
    </div>
    ${i}
    <div class="post-reaction-counts">
      <button id="reaction-counter">reactions: ${n} ${c}</button>
      <button id="comment-counter">comments: ${o}</button>
    </div>
    <p id="post-body"><span id="author-name">${e.author.name}</span> ${e.body}</p>
    <div class="post-footer">
      <div id="post-comment-section">
          ${r}
      </div>
    </div>
    <div class="post-comment-input">
      <input type="text" class="comment-input" placeholder="Add a comment...">
      <button class="comment-submit">Submit</button>
    </div>
  `,b(t,e),t}function g(e){return e.length?e.map(t=>`
    <div class="comment">
      <div class="comment-header">
        <img class="comment-profile-img" src="${t.author.avatar.url}" alt="${t.author.name}">
        <div class="comment-author-info">
          <p class="comment-author-name">${t.author.name}</p>
        </div>
      </div>
      <div class="comment-body">
        <p class="comment-text">${t.body}</p>
        <button class="comment-reaction">👍</button>
      </div>
      <div class="comment-actions">
        <button class="comment-reply">Reply</button>
      </div>
    </div>
    `).join(""):'<p class="comments">No comments yet</p>'}function h(e,t){return e?`<img class="post-img" src="${e}" alt="${t}">`:`<img class="post-img" src="${m}src/assets/images/no_img.png" alt="">`}function b(e,t){const o=e.querySelector(".comment-input"),n=e.querySelector(".comment-submit"),a=e.querySelector("#post-comment-section"),c=e.querySelector("#reaction-counter"),r=e.querySelector("#comment-counter");n.addEventListener("click",()=>{o.value===""?console.log("Comment input is empty"):console.log("Comment submitted",o.value,t.id)});let i=!1;r.addEventListener("click",()=>{i=!i,a.style.display=i?"block":"none"}),c.addEventListener("click",s=>{console.log("Reaction section clicked",s.target)}),e.querySelector(".post-header").addEventListener("click",()=>{window.location.href=`../profile/user.html?username=${t.author.name}`}),e.querySelector(".post-img").addEventListener("click",()=>{window.location.href=`../posts/view.html?username=${t.author.name}&id=${t.id}`})}function y(){const e=localStorage.getItem("profile"),t=JSON.parse(e);u(t.name).then(o=>{const n=document.querySelector("#profile-img"),a=document.querySelector("#profile-username"),c=document.querySelector("#profile-bio");n.src=o.data.avatar.url,a.textContent=o.data.name,c.textContent=o.data.bio})}p();
