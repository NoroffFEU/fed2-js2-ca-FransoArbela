import{a as r,b as d}from"./read-CNdrJs85.js";/* empty css                */import{a as s}from"./authGuard-BjwX1WRu.js";import"./main-CB5Bi5DI.js";s();const a=JSON.parse(localStorage.getItem("profile")),i=a.name;r(i).then(e=>{const t=document.querySelector(".profile");t.innerHTML=`
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
    `});d(i).then(e=>{e.data.forEach(t=>{const o=document.createElement("div");o.classList.add("post"),o.id=t.id,o.innerHTML=`
        <img class="post-img" src="${t.media.url}" alt="${t.title}">
            `,o.addEventListener("click",()=>{window.location.href=`../posts/view.html?username=${i}&id=${t.id}`}),document.querySelector(".posts").appendChild(o)})});
