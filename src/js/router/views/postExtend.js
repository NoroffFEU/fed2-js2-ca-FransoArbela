import { authGuard } from "../../utilities/authGuard";
import { readPost } from "/src/js/api/post/read.js";
import "../../../scss/postExtend.scss";
authGuard();

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

readPost(id).then((allPosts) => {
    const post = document.querySelector(".post-container");
    post.innerHTML = `
        <div class="post-container">
            <img src="${allPosts.data.media.url}" alt="${allPosts.data.title}">
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
});