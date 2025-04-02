import{a as n}from"./authGuard-BjwX1WRu.js";import{b as u}from"./read-DTSw6bIx.js";import"./main-DWgoWSoN.js";n();const c=JSON.parse(localStorage.getItem("profile"));c.name;const d=new URLSearchParams(window.location.search),l=d.get("id");d.get("username");u(l).then(a=>{const t={id:a.data.id,title:a.data.title,body:a.data.body,created:a.data.created,updated:a.data.updated,author:{name:a.data.author.name,email:a.data.author.email,bio:a.data.author.bio,avatar:a.data.author.avatar.url,banner:a.data.author.banner.url},media:{url:a.data.media.url,alt:a.data.media.alt},tags:a.data.tags,reactions:a.data.reactions,reactionCount:a.data._count.reactions,commentCount:a.data._count.comments,comments:a.data.comments.map(r=>({id:r.id,body:r.body,created:r.created,replyToId:r.replyToId??null,postId:a.data.id,author:{name:r.author.name,email:a.data.author.email,bio:a.data.author.bio,avatar:{url:r.author.avatar.url,alt:"avatar"}},banner:{url:a.data.author.banner.url,alt:"banner"}}))},e=document.querySelector(".post"),o=document.querySelector(".post-img");document.querySelector(".post-activity"),document.querySelector(".post-profile"),document.querySelector(".post-body"),document.querySelector(".post-input-section");const i=m(t.media,t.title);o.appendChild(i),e.id=t.id,s(t.comments)});function m(a,t){const e=document.createElement("img");return e.src=a.url,e.alt=t,e.classList.add("post-image"),e}function s(a){return a.map(t=>`
        <div class="comment" id="comment-${t.id}">
          <div class="comment-header">
            <img src="${t.author.avatar.url}" alt="${t.author.avatar.alt}" class="avatar" />
            <div class="comment-author">${t.author.name}</div>
            <div class="comment-date">${new Date(t.created).toLocaleString()}</div>
          </div>
          <div class="comment-body">${t.body}</div>
          <button class="delete-comment" data-id="${t.id}">Delete</button>
        </div>
      `).join("")}
