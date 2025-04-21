import { authGuard } from "../../../utilities/authGuard";
import { readPost } from "/src/js/api/post/read.js";
import "../../../../assets/css/post.css";
import {
  formatPostData,
  generatePostHTML,
  postInteraction,
} from "./postGenerate.js";

authGuard();

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");
if (!postId) {
  console.error("Post ID not found in URL");
}

readPost(postId).then((posts) => {
  console.log(posts);
  const postContainer = document.querySelector(".posts");
  const post = posts.data;
  const postInfo = formatPostData(post);
  const postHtmlString = generatePostHTML(postInfo);
  const wrapper = document.createElement("div");
  wrapper.innerHTML = postHtmlString.trim();
  const postNode = wrapper.firstElementChild;

  postContainer.appendChild(postNode);

  postInteraction();
});
