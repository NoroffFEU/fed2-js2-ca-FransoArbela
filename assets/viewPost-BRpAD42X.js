import{a as p}from"./authGuard-OOVH_Tj-.js";import{b as g}from"./read-0dNlfVxd.js";import{r as u}from"./read-CmSSu15i.js";import"./constants-2sVKtVoG.js";p();const v=localStorage.getItem("profile"),f=JSON.parse(v),h=f.name,d=new URLSearchParams(window.location.search),$=d.get("id"),E=d.get("username");let n="";h===E&&(n=`<div class="edit-btn">
  <button></button>
</div>`);g($).then(e=>{const m=document.querySelector(".post");let a="";e.data.media===null?a='<img class="post-img" src="/src/assets/images/no_img.png" alt="">':a=`<img class="post-img" src="${e.data.media.url}" alt="${e.data.title}">`;let s=0,o=0;e.data._count.comments!==0&&(s=e.data._count.comments),e.data._count.reactions!==0&&(o=e.data._count.reactions),m.innerHTML=`

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
            <p>Likes ${o}</p>
          </div>

          <div class="post-comments">
            <p>comments ${s}</p>
          </div>
        </div>
      </div>

    `,document.querySelectorAll(".post-img").forEach(t=>{t.addEventListener("click",i=>{i.stopPropagation();const r=document.getElementById("image-modal"),l=document.getElementById("modal-img");l.src=t.src,r.classList.remove("hidden")})}),document.getElementById("close-modal").addEventListener("click",()=>{document.getElementById("image-modal").classList.add("hidden")}),document.getElementById("image-modal").addEventListener("click",t=>{t.target.id==="image-modal"&&t.currentTarget.classList.add("hidden")});const c=d.get("username");u(c).then(t=>{const i=document.querySelector(".profile");i.innerHTML=`
        <div class="profile-container">
            <img src="${t.data.avatar.url}" alt="${t.data.avatar.alt}">
            <div class="profile-details">
                <h3>${t.data.name}</h3>
                
            </div>
    ${n}
            </div>
    `})});
