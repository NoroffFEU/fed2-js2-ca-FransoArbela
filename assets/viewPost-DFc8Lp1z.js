import{a as l}from"./authGuard-BjwX1WRu.js";import{c as p,a as g}from"./read-CNdrJs85.js";import"./main-CB5Bi5DI.js";l();const u=localStorage.getItem("profile"),v=JSON.parse(u),f=v.name,d=new URLSearchParams(window.location.search),h=d.get("id"),E=d.get("username");let o="";f===E&&(o=`<div class="edit-btn">
  <button></button>
</div>`);p(h).then(e=>{const n=document.querySelector(".post");let a="";e.data.media===null?a='<img class="post-img" src="../src/assets/images/no_img.png" alt="">':a=`<img class="post-img" src="${e.data.media.url}" alt="${e.data.title}">`;let s=0;e.data._count.comments!==0&&e.data._count.comments,e.data._count.reactions!==0&&(s=e.data._count.reactions),n.innerHTML=`

      <!-- Add the modal to the postExtend view -->
      <div id="image-modal" class="hidden">
        <span id="close-modal">&times;</span>
        <img id="modal-img" src="" alt="" />
      </div>

      <!-- Post Image -->
      <div class="post-img-wrapper">${a}</div>

      <!-- Post Details -->
      <div class="post-details-wrapper">
        <div class="post-details">
          <div class="profile">
          </div>
          <h4>${e.data.title}</h4>
          <p>${e.data.body}</p>
        </div>

        <!-- Post Reactions -->
        <div class="post-reactions">
          <div class="post-likes">
            <p>Likes ${s}</p>
          </div>
    `,document.querySelectorAll(".post-img").forEach(t=>{t.addEventListener("click",i=>{i.stopPropagation();const m=document.getElementById("image-modal"),r=document.getElementById("modal-img");r.src=t.src,m.classList.remove("hidden")})}),document.getElementById("close-modal").addEventListener("click",()=>{document.getElementById("image-modal").classList.add("hidden")}),document.getElementById("image-modal").addEventListener("click",t=>{t.target.id==="image-modal"&&t.currentTarget.classList.add("hidden")});const c=d.get("username");g(c).then(t=>{const i=document.querySelector(".profile");i.innerHTML=`
        <div class="profile-container">
            <img src="${t.data.avatar.url}" alt="${t.data.avatar.alt}">
            <div class="profile-details">
                <h3>${t.data.name}</h3>
                
            </div>
    ${o}
            </div>
    `})});
