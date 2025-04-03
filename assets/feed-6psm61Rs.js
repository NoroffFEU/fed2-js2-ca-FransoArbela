import{B as m}from"./main-etE6r0Nb.js";import{r as l}from"./read-B-70DzHL.js";import{r as u}from"./read-CvsRAWyP.js";import{a as d}from"./authGuard-BjwX1WRu.js";d();function p(){f(),y()}function f(){l(14,1).then(t=>{const e=document.querySelector(".posts");t.data.forEach(o=>{const n=v(o);e.appendChild(n)})})}function v(t){const e=document.createElement("div");e.classList.add("post"),e.setAttribute("id",t.id);const o=t._count.comments||0,n=t._count.reactions||0,c=t.reactions.filter(s=>s.count>0).map(s=>s.symbol).join(""),a=g(t.comments),i=h(t.media?.url,t.title);return e.innerHTML=`
    <div class="post-header">
      <img class="profile-img" src="${t.author.avatar.url}" alt="${t.title}">
      <p>${t.author.name}</p>
    </div>
    ${i}
    <div class="post-reaction-counts">
      <button id="reaction-counter">reactions: ${n} ${c}</button>
      <button id="comment-counter">comments: ${o}</button>
    </div>
    <p id="post-body"><span id="author-name">${t.author.name}</span> ${t.body}</p>
    <div class="post-footer">
      <div id="post-comment-section">
          ${a}
      </div>
    </div>
    <div class="post-comment-input">
      <input type="text" class="comment-input" placeholder="Add a comment...">
      <button class="comment-submit">Submit</button>
    </div>
  `,b(e,t),e}function g(t){return t.length?t.map(e=>`
    <div class="comment">
      <div class="comment-header">
        <img class="comment-profile-img" src="${e.author.avatar.url}" alt="${e.author.name}">
        <div class="comment-author-info">
          <p class="comment-author-name">${e.author.name}</p>
        </div>
      </div>
      <div class="comment-body">
        <p class="comment-text">${e.body}</p>
        <button class="comment-reaction">👍</button>
      </div>
      <div class="comment-actions">
        <button class="comment-reply">Reply</button>
      </div>
    </div>
    `).join(""):'<p class="comments">No comments yet</p>'}function h(t,e){return t?`<img class="post-img" src="${t}" alt="${e}">`:`<img class="post-img" src="${m}src/assets/images/no_img.png" alt="">`}function b(t,e){const o=t.querySelector(".comment-input"),n=t.querySelector(".comment-submit"),r=t.querySelector("#post-comment-section"),c=t.querySelector("#reaction-counter"),a=t.querySelector("#comment-counter");n.addEventListener("click",()=>{o.value===""?console.log("Comment input is empty"):console.log("Comment submitted",o.value,e.id)});let i=!1;a.addEventListener("click",()=>{i=!i,r.style.display=i?"block":"none"}),c.addEventListener("click",s=>{console.log("Reaction section clicked",s.target)}),t.querySelector(".post-header").addEventListener("click",()=>{window.location.href=`../profile/user.html?username=${e.author.name}`}),t.querySelector(".post-img").addEventListener("click",()=>{window.location.href=`../posts/view.html?username=${e.author.name}&id=${e.id}`})}function y(){const t=localStorage.getItem("profile"),e=JSON.parse(t);u(e.name).then(o=>{const n=document.querySelector("#profile-img"),r=document.querySelector("#profile-username"),c=document.querySelector("#profile-bio");n.src=o.data.avatar.url,r.textContent=o.data.name,c.textContent=o.data.bio})}p();
