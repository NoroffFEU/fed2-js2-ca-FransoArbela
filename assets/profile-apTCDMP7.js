import{r}from"./read-CmSSu15i.js";import{r as d}from"./read-0dNlfVxd.js";/* empty css                */import{a as s}from"./authGuard-OOVH_Tj-.js";import"./constants-2sVKtVoG.js";s();const a=JSON.parse(localStorage.getItem("profile")),i=a.name;r(i).then(t=>{const e=document.querySelector(".profile");e.innerHTML=`
        <div class="profile-container">
            <button id="edit-btn">Edit</button>
            <img src="${t.data.avatar.url}" alt="${t.data.avatar.alt}">"
            <div class="profile-details">
                <h1>${t.data.name}</h1>
                <p>${t.data.email}</p>
                    <div class="profile-counts">
                        <p>posts ${t.data._count.posts}</p>
                        <p>followers ${t.data._count.followers}</p>
                        <p>following ${t.data._count.following}</p>
                    </div>
                <p id="bio">${t.data.bio}</p>
            </div>
        </div>
    `});d(i).then(t=>{t.data.forEach(e=>{const o=document.createElement("div");o.classList.add("post"),o.id=e.id,o.innerHTML=`
        <img class="post-img" src="${e.media.url}" alt="${e.title}">
            `,o.addEventListener("click",()=>{window.location.href=`../../../../posts/view.html?username=${i}&id=${e.id}`}),document.querySelector(".posts").appendChild(o)})});
