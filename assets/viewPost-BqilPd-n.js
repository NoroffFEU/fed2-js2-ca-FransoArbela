import{a as w}from"./authGuard-BjwX1WRu.js";import{b as C}from"./read-XpbEXNG3.js";import{b,c as h}from"./main-DW2KPAnL.js";async function L(e,t){try{if(!(await fetch(`${b}/${e}/comment/${t}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${h}`}})).ok)throw new Error("Comment deletion failed");location.reload()}catch(o){console.error("Error deleting comment:",o)}}async function g(e,t,o=null){try{const a={body:t};o&&(a.replyToId=Number(o));const r=await fetch(`${b}/${e}/comment`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${h}`},body:JSON.stringify(a)});if(!r.ok)throw new Error("Comment submission failed");console.log("Comment submitted successfully",r);const l=await r.json();console.log("Comment data:",l),location.reload()}catch(a){console.error("Error submitting comment:",a)}}w();const $=JSON.parse(localStorage.getItem("profile"));$.name;const I=new URLSearchParams(window.location.search),S=I.get("id");I.get("username");C(S).then(e=>{const t={id:e.data.id,title:e.data.title,body:e.data.body,created:e.data.created,updated:e.data.updated,author:{name:e.data.author.name,email:e.data.author.email,bio:e.data.author.bio,avatar:e.data.author.avatar.url,banner:e.data.author.banner.url},media:{url:e.data.media.url,alt:e.data.media.alt},tags:e.data.tags,reactions:e.data.reactions,reactionCount:e.data._count.reactions,commentCount:e.data._count.comments,comments:e.data.comments.map(n=>({id:n.id,body:n.body,created:n.created,replyToId:n.replyToId??null,postId:e.data.id,author:{name:n.author.name,email:e.data.author.email,bio:e.data.author.bio,avatar:{url:n.author.avatar.url,alt:"avatar"}},banner:{url:e.data.author.banner.url,alt:"banner"}}))},o=document.querySelector(".post"),a=document.querySelector(".post-img"),r=document.querySelector(".post-body"),l=t.author;P(l,t.body);const s=A(t.media,t.title);a.appendChild(s),o.id=t.id;const i=B(t.comments);r.appendChild(i),document.querySelectorAll("#submit-reply").forEach(n=>{const c=n.closest(".reply-input").querySelector("#comment-input");n.addEventListener("click",()=>{c.value.trim()!==""&&g(t.id,c.value,t.comments.id)})}),document.querySelectorAll(".delete-comment-btn").forEach(n=>{n.addEventListener("click",async()=>{if(!confirm("Are you sure you want to delete this comment?"))return;const m=n.closest(".reply"),u=n.closest(".comment"),E=m?m.id:null,T=u?u.id:null,p=E||T;if(!p){console.warn("Couldn't find comment or reply ID.");return}await L(t.id,p),location.reload()})})});const y=document.querySelector(".profile-img"),f=document.querySelector(".profile-name"),q=document.querySelector(".post-text");function P(e,t){y.src=e.avatar,y.alt=e.name,f.innerHTML=e.name,f.classList.add("profile-name"),q.innerHTML=t}function A(e,t){const o=document.createElement("img");return o.src=e.url,o.alt=t,o.classList.add("post-image"),o.classList.add("post-img"),o}const v=document.querySelector("#input-post-comment"),k=document.querySelector("#submit-post-comment");k.addEventListener("click",()=>{console.log("Submit button clicked"),v.value.trim()!==""&&g(S,v.value)});function B(e){const t=document.createElement("div");t.classList.add("comment-section");const o={};return e.forEach(a=>{a.replyToId!==null&&(o[a.replyToId]||(o[a.replyToId]=[]),o[a.replyToId].push(a))}),e.forEach(a=>{if(a.replyToId===null){const r=document.createElement("div");r.classList.add("comment"),r.id=a.id,r.innerHTML=`
        <div class="comment-wrapper">
          <div  class="comment-profile-img">
            <img
              src="${a.author.avatar.url}" 
              alt="${a.author.avatar.alt}"
              class="profile-img"
            />
          </div>
          <div class="comment-and-replies">
            <div class="comment-name-and-body-wrapper">
              <div class="comment-name">${a.author.name}</div>
              <div class="comment-text-and-delete">
                <div class="comment-body">
                  <p>${a.body}</p>
                </div>
                <button data-id="${a.id}" class="delete-comment-btn"><i class="fa-solid fa-trash" style="color: #f04242;"></i></button>
              </div>
              <div class="reply-input">
                <input id="comment-input" type="text" placeholder="Reply..." />
                <button id="submit-reply">submit</button>
              </div>
              <button class="view-replies">reply</button>
            </div>
            <div class="reply-section"></div>
          </div>
        </div>
      `;const l=r.querySelector(".reply-section");(o[a.id]||[]).forEach(i=>{const d=document.createElement("div");d.classList.add("reply"),d.id=i.id,d.innerHTML=`
          <div class="reply-wrapper">
            <div class="reply-profile-img">
              <img
                src="${i.author.avatar?.url||"../src/assets/images/no_img.png"}"
                alt="${i.author.avatar?.alt||"Profile Image"}"
                class="profile-img"
              />
            </div>
            <div class="reply-name-and-body">
              <div class="reply-name-and-body-wrapper">
                <div class="reply-name">${i.author.name}</div>
                <div class="reply-text-and-delete">
                  <div class="reply-body">
                  <p>${i.body}</p>
                  </div>
                  <button class="delete-comment-btn"><i class="fa-solid fa-trash" style="color: #f04242;"></i></button>
                </div>
                <div class="reply-input">
                  <input id="comment-input" type="text" placeholder="Reply..." />
                  <button id="submit-reply">submit</button>
                </div>
                <button class="view-replies">reply</button>
              </div>
            </div>
          </div>
        `,l.appendChild(d)}),t.appendChild(r)}}),t}
