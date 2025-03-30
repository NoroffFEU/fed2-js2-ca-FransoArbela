import { readProfile } from "../../api/profile/read";
import { authGuard } from "../../utilities/authGuard";
import { readPostsByUser } from "/src/js/api/post/read.js";
import "/src/assets/css/profile.css";
authGuard();


const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username");

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

    if (allPosts.data.length === 0) {
        const noPosts = document.createElement("p");
        noPosts.innerHTML = "No posts yet";
        document.querySelector(".posts").appendChild(noPosts);
    } else {
        allPosts.data.forEach((post) => {

            let imageTag = "";
            if (post.media?.url) {
              imageTag = `<img class="post-img" src="${post.media.url}" alt="${post.title}">`;
            } else {
              imageTag = `<img class="post-img" src="/src/assets/images/no_img.png" alt="">`;
            }
            
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.id = post.id;
            postElement.innerHTML = `
            ${imageTag}
                `;
            postElement.addEventListener("click", () => {
                window.location.href = `../../../../posts/view.html?username=${username}&id=${post.id}`;
            });
            document.querySelector(".posts").appendChild(postElement);
        });
    }
})