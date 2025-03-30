import { authGuard } from "../../utilities/authGuard";
import { readPost } from "/src/js/api/post/read.js";
import "/src/assets/css/postExtend.css";
import { readProfile } from "../../api/profile/read";
import { like } from "../../api/post/reaction";
authGuard();

// document.body.addEventListener("click", (e) => {
//   console.log("click")
//   like();
// });

const profile = localStorage.getItem("profile");
const profileJSON = JSON.parse(profile);
const authUser = profileJSON.name;

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const username = urlParams.get("username");


let editBtn = "";

if (authUser === username) {
  editBtn = `<div class="edit-btn">
  <button></button>
</div>`;
}



readPost(id).then((allPosts) => {
  const post = document.querySelector(".post");

  let imageTag = "";
  if (allPosts.data.media === null) {
    imageTag = `<img class="post-img" src="/src/assets/images/no_img.png" alt="">`;
  } else {
    imageTag = `<img class="post-img" src="${allPosts.data.media.url}" alt="${allPosts.data.title}">`;
  }

  let commentCount = 0;
  let likeCount = 0;

  if (allPosts.data._count.comments !== 0) {
    commentCount = allPosts.data._count.comments
  }

  if (allPosts.data._count.reactions !== 0) {
    likeCount = allPosts.data._count.reactions
  }


  post.innerHTML = `

      <!-- Add the modal to the postExtend view -->
      <div id="image-modal" class="hidden">
        <span id="close-modal">&times;</span>
        <img id="modal-img" src="" alt="" />
      </div>

      <!-- Post Image -->
      <div class="post-img-wrapper">${imageTag}</div>

      <!-- Post Details -->
      <div class="post-details-wrapper">
        <div class="post-details">
          <div class="profile">
          </div>
          <h4>${allPosts.data.title}</h4>
          <p>${allPosts.data.body}</p>
        </div>

        <!-- Post Reactions -->
        <div class="post-reactions">
          <div class="post-likes">
            <p>Likes ${likeCount}</p>
          </div>

          <div class="post-comments">
            <p>comments ${commentCount}</p>
          </div>
        </div>
      </div>

    `;
  // Add image modal listeners
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

const username = urlParams.get("username");
  readProfile(username).then((allData) => {
    const profile = document.querySelector(".profile");
    profile.innerHTML = `
        <div class="profile-container">
            <img src="${allData.data.avatar.url}" alt="${allData.data.avatar.alt}">
            <div class="profile-details">
                <h3>${allData.data.name}</h3>
                
            </div>
    ${editBtn}
            </div>
    `;
  });
});


