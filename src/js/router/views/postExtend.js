import { authGuard } from "../../utilities/authGuard";
import { readPost } from "/src/js/api/post/read.js";
import "../../../scss/postExtend.scss";
import { readProfile } from "../../api/profile/read";
authGuard();

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const username = urlParams.get("username");

console.log(id)

readPost(id).then((allPosts) => {
  const post = document.querySelector(".post-container");

  let imageTag = "";
  if (allPosts.data.media === null) {
    imageTag = `<img class="post-img" src="/src/img/no_img.png" alt="">`;
  } else {
    imageTag = `<img class="post-img" src="${allPosts.data.media.url}" alt="${allPosts.data.title}">`;
  }

  post.innerHTML = `
<div id="image-modal" class="hidden">
  <span id="close-modal">&times;</span>
  <img id="modal-img" src="" alt="">
</div>
         ${imageTag}
    <div class="post-wrapper">
        <div class="post-details">
            <div class="profile"></div>
                <h4>${allPosts.data.title}</h4>
                <p>${allPosts.data.body}</p>
        </div>
        <div>
        
        </div>
        <div class="post-reactions">
             <div class="post-likes">
                <p>Likes ${allPosts.data._count.reactions}</p>
              </div>
              <div class="post-comments">
                <p>comments ${allPosts.data._count.comments}</p>
              </div>
         </div>

    </div>
    `;
    document.querySelectorAll(".post-img").forEach((img) => {
        img.addEventListener("click", (e) => {
          e.stopPropagation(); // prevent triggering post redirect
          const modal = document.getElementById("image-modal");
          const modalImg = document.getElementById("modal-img");
          modalImg.src = img.src;
          modal.classList.remove("hidden");
        });
      });
      
      document.getElementById("close-modal").addEventListener("click", () => {
        document.getElementById("image-modal").classList.add("hidden");
      });

      document.getElementById("image-modal").addEventListener("click", (e) => {
        if (e.target.id === "image-modal") {
          e.currentTarget.classList.add("hidden");
        }
      });
});

readProfile(username).then((allData) => {
  const profile = document.querySelector(".profile");
  profile.innerHTML = `
        <div class="profile-container">
            <img src="${allData.data.avatar.url}" alt="${allData.data.avatar.alt}">
            <div class="profile-details">
                <h3>${allData.data.name}</h3>
            </div>
        </div>
    `;
});