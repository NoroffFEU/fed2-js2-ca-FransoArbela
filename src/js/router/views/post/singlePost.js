import { authGuard } from "../../../utilities/authGuard";
import { readPost } from "/src/js/api/post/read.js";
import "../../../../assets/css/post.css";
import { formatPostData, postHTML, postInteraction } from "./postGenerate.js";

authGuard();

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");
if (!postId) {
  console.error("Post ID not found in URL");
}

readPost(postId).then((posts) => {
  const postContainer = document.querySelector(".posts");
  const post = posts.data;
  const postInfo = formatPostData(post);
  postContainer.appendChild(postHTML(postInfo));

  postInteraction(posts);
});
