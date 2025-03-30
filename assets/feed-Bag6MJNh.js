import{r as c}from"./read-BAsoaHjc.js";import{a as n}from"./authGuard-OOVH_Tj-.js";import"./constants-X-ayW_43.js";n();c(14,1).then(o=>{o.data.forEach(e=>{const t=document.createElement("div");t.classList.add("post");let a="";e.media?.url?a=`<img class="post-img" src="${e.media.url}" alt="${e.title}">`:a='<img class="post-img" src="/src/assets/images/no_img.png" alt="">';let s=0,i=0;e._count.comments!==0&&(s=e._count.comments),e._count.reactions!==0&&(i=e._count.reactions);const r='<i class="fas fa-thumbs-up"></i>',m='<i class="fas fa-comment"></i>';t.innerHTML=`
              <div class="post-header">
                 <img class="profile-img" src="${e.author.avatar.url}" alt="${e.title}">
                 <p>${e.author.name}</p>
              </div>
              ${a}
                <h2>${e.title}</h2>
              <p>${e.body}</p>
                <div class="post-footer">
                    <p>likes ${r} ${i}</p>
                    <p>comments ${m} ${s}</p>
            `,t.querySelector(".post-header").addEventListener("click",()=>{window.location.href=`../../../../profile/user.html?username=${e.author.name}`}),t.querySelector(".post-img").addEventListener("click",()=>{window.location.href=`../../../../posts/view.html?username=${e.author.name}&id=${e.id}`}),document.querySelector(".posts").appendChild(t)})});
