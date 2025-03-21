import { authGuard } from "../../utilities/authGuard";
import "/src/scss/posts.scss";
import { readPosts, readPost, readPostsByUser } from "/src/js/api/post/read.js";

authGuard();

readPosts(14, 1).then((allPosts) => {
    allPosts.data.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");

      // Build an <img> tag only if the URL exists
      let imageTag = "";
      if (post.media?.url) {
        imageTag = `<img class="post-img" src="${post.media.url}" alt="${post.title}">`;
      } else {
        imageTag = `<img class="post-img" src="/src/img/no_img.png" alt="">`;
      }

      const like = `<i class="fas fa-thumbs-up"></i>`;
      const comment = `<i class="fas fa-comment"></i>`;

      postElement.innerHTML = `
              <div class="post-header">
                 <img class="profile-img" src="${post.author.avatar.url}" alt="${post.title}">
                 <p>${post.author.name}</p>
              </div>
              <p>${post.reactions}</p>
              <p>${post.comments}</p>
              ${imageTag}
                <h2>${post.title}</h2>
              <p>${post.body}</p>
                <div class="post-footer">
                    <p>${like} ${post.reactions}</p>
                    <p>${comment} ${post.comments}</p>
            `;

      document.querySelector(".posts").appendChild(postElement);
    });
  });
