import{r as a}from"./read-T491hNGT.js";import{a as c}from"./authGuard-BjwX1WRu.js";import{b as d}from"./read-BDAZwLoq.js";import{e as m,d as f}from"./main-BKDZr5q_.js";/* empty css                */import"https://kit.fontawesome.com/553a084866.js";async function s(o,e){try{if(!(await fetch(`${m}/${o}/${e}`,{method:"PUT",headers:{accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"X-Noroff-API-Key":`${f}`}})).ok)throw new Error("Follow action failed");window.location.reload()}catch(t){console.error("Error following user:",t)}}c();const p=new URLSearchParams(window.location.search),i=p.get("username");a(i).then(o=>{const e=document.querySelector(".profile");e.innerHTML=`
        <div class="profile-container">
            <img src="${o.data.avatar.url}" alt="${o.data.avatar.alt}">
            <div class="profile-details">
                <h1>${o.data.name}</h1>
                <p>${o.data.email}</p>
                    <div class="profile-counts">
                        <p>posts ${o.data._count.posts}</p>
                        <p>followers ${o.data._count.followers}</p>
                        <p>following ${o.data._count.following}</p>
                    </div>
                    ${u(o.data)}
                <p id="bio">${o.data.bio}</p>
            </div>
        </div>
    `;const t=document.getElementById("follow-btn"),n=document.getElementById("unfollow-btn"),r=t||n;r.innerHTML==="Unfollow"&&r.addEventListener("click",()=>{s(i,"unfollow")}),r.innerHTML==="Follow"&&r.addEventListener("click",()=>{s(i,"follow")})});const u=o=>{const e=localStorage.getItem("profile"),t=JSON.parse(e).name;return o.followers.find(l=>l.name===t)?'<button id="unfollow-btn">Unfollow</button>':'<button id="follow-btn">Follow</button>'};d(i).then(o=>{if(o.data.length===0){const e=document.createElement("p");e.innerHTML="No posts yet",document.querySelector(".posts").appendChild(e)}else o.data.forEach(e=>{let t="";e.media?.url?t=`<img class="post-img" src="${e.media.url}" alt="${e.title}">`:t='<img class="post-img" src="../src/assets/images/no_img.png" alt="">';const n=document.createElement("div");n.classList.add("post"),n.id=e.id,n.innerHTML=`
            ${t}
                `,n.addEventListener("click",()=>{window.location.href=`../posts/view.html?username=${i}&id=${e.id}`}),document.querySelector(".posts").appendChild(n)})});
