import{r}from"./read-BAc75_St.js";import{b as s}from"./read-DkFh_xn1.js";/* empty css                */import{a as d}from"./authGuard-BjwX1WRu.js";import"./main-CcqVSLlx.js";import"https://kit.fontawesome.com/553a084866.js";d();const a=JSON.parse(localStorage.getItem("profile")),t=a.name;r(t).then(o=>{const e=document.querySelector(".profile");e.innerHTML=`
        <div class="profile-container">
            <div class="option-container">
            </div>
            <img src="${o.data.avatar.url}" alt="${o.data.avatar.alt}">
            <div class="profile-details">
                <h1>${o.data.name}</h1>
                <p>${o.data.email}</p>
                    <div class="profile-counts">
                        <p>posts ${o.data._count.posts}</p>
                        <p>followers ${o.data._count.followers}</p>
                        <p>following ${o.data._count.following}</p>
                    </div>
                <div class="follow-btns"></div>
                <p id="bio">${o.data.bio}</p>
            </div>
        </div>
    `});s(t).then(o=>{o.data.forEach(e=>{const i=document.createElement("div");i.classList.add("post"),i.id=e.id,i.innerHTML=`
        <img class="post-img" src="${e.media.url}" alt="${e.title}">
            `,i.addEventListener("click",()=>{window.location.href=`../posts/view.html?username=${t}&id=${e.id}`}),document.querySelector(".posts").appendChild(i)})});
