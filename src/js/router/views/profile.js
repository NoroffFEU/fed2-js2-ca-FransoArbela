import { readProfile } from "../../api/profile/read";
import { authGuard } from "../../utilities/authGuard";
import { readPostsByUser } from "/src/js/api/post/read.js";
import "../../../scss/profile.scss";
authGuard();
const profile = JSON.parse(localStorage.getItem("profile"));
const username = profile.name;

readProfile(username).then((allData) => {
  const profile = document.querySelector(".profile");
  profile.innerHTML = `
        <div class="profile-container">
            <button id="edit-btn">Edit</button>
            <img src="${allData.data.avatar.url}" alt="${allData.data.avatar.alt}">"
            <div class="profile-details">
                <h1>${allData.data.name}</h1>
                <p>${allData.data.email}</p>
                    <div class="profile-counts">
                        <p>posts ${allData.data._count.posts}</p>
                        <p>followers ${allData.data._count.followers}</p>
                        <p>following ${allData.data._count.following}</p>
                    </div>
                <p id="bio">${allData.data.bio}</p>
            </div>
        </div>
    `;
});


readPostsByUser(username).then((allPosts) => {
    allPosts.data.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.id = post.id;
        postElement.innerHTML = `
        <img class="post-img" src="${post.media.url}" alt="${post.title}">
            `;
        postElement.addEventListener("click", () => {
            window.location.href = `../../../../post/extend/index.html?username=${username}&id=${post.id}`;
        });
        document.querySelector(".posts").appendChild(postElement);
    });
})