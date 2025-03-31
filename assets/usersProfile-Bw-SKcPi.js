import{a,b as r}from"./read-Cz_gz5MC.js";import{a as n}from"./authGuard-BjwX1WRu.js";/* empty css                */import"./main-ByXIHHOD.js";n();const d=new URLSearchParams(window.location.search),s=d.get("username");a(s).then(e=>{const t=document.querySelector(".profile");t.innerHTML=`
        <div class="profile-container">
            <button id="edit-btn">Edit</button>
            <img src="${e.data.avatar.url}" alt="${e.data.avatar.alt}">
            <div class="profile-details">
                <h1>${e.data.name}</h1>
                <p>${e.data.email}</p>
                    <div class="profile-counts">
                        <p>posts ${e.data._count.posts}</p>
                        <p>followers ${e.data._count.followers}</p>
                        <p>following ${e.data._count.following}</p>
                    </div>
                <p id="bio">${e.data.bio}</p>
            </div>
        </div>
    `});r(s).then(e=>{if(e.data.length===0){const t=document.createElement("p");t.innerHTML="No posts yet",document.querySelector(".posts").appendChild(t)}else e.data.forEach(t=>{let i="";t.media?.url?i=`<img class="post-img" src="${t.media.url}" alt="${t.title}">`:i='<img class="post-img" src="../src/assets/images/no_img.png" alt="">';const o=document.createElement("div");o.classList.add("post"),o.id=t.id,o.innerHTML=`
            ${i}
                `,o.addEventListener("click",()=>{window.location.href=`../posts/view.html?username=${s}&id=${t.id}`}),document.querySelector(".posts").appendChild(o)})});
