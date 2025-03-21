import { authGuard } from "../../utilities/authGuard";
import { readPost } from "/src/js/api/post/read.js";
import "../../../scss/postExtend.scss";
authGuard();

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

readPost(id).then((allPosts) => {
  const post = document.querySelector(".post-container");

  let imageTag = "";
  if (!allPosts.data.media.url) {
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
                    <h1>${allPosts.data.title}</h1>
                    <p>${allPosts.data.body}</p>
                 </div>
            
            <div class="post-comments">
                <p>comments ${allPosts.data._count.comments}</p>
            </div>
            <div class="post-reactions">
                <p>${allPosts.data._count.reactions}</p>
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
