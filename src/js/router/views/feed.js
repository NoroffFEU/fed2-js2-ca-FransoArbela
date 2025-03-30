import { readPost } from "../../api/post/read";
import { authGuard } from "../../utilities/authGuard";
import "/src/assets/css/feed.css";
import { readPosts } from "/src/js/api/post/read.js";

authGuard();

readPosts(14, 1).then((allPosts) => {
  allPosts.data.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    let imageTag = "";
    if (post.media?.url) {
      imageTag = `<img class="post-img" src="${post.media.url}" alt="${post.title}">`;
    } else {
      imageTag = `<img class="post-img" src="/src/assets/images/no_img.png" alt="">`;
    }

    let commentCount = 0;
    let likeCount = 0;

    if (post._count.comments !== 0) {
      commentCount = post._count.comments
    }
  
    if (post._count.reactions !== 0) {
      likeCount = post._count.reactions
    }

    const like = `<i class="fas fa-thumbs-up"></i>`;
    const comment = `<i class="fas fa-comment"></i>`;

    postElement.innerHTML = `
              <div class="post-header">
                 <img class="profile-img" src="${post.author.avatar.url}" alt="${post.title}">
                 <p>${post.author.name}</p>
              </div>
              ${imageTag}
                <h2>${post.title}</h2>
              <p>${post.body}</p>
                <div class="post-footer">
                    <p>likes ${like} ${likeCount}</p>
                    <p>comments ${comment} ${commentCount}</p>
            `;
    const postHeader = postElement.querySelector(".post-header");
    postHeader.addEventListener("click", () => {
      window.location.href = `../../../../profile/user.html?username=${post.author.name}`;
    });

    const postImg = postElement.querySelector(".post-img");
    postImg.addEventListener("click", () => {
      window.location.href = `../../../../posts/view.html?username=${post.author.name}&id=${post.id}`;
    });
    document.querySelector(".posts").appendChild(postElement);
  });
});

