import { authGuard } from "../../../utilities/authGuard.js";
import { editPost } from "../../../api/post/update.js";
import { readPost } from "../../../api/post/read.js";
import "../../../../assets/css/updatePost.css";
authGuard();

const postId = new URLSearchParams(window.location.search).get("id");
document.getElementById("edit-post").addEventListener("submit", (event) => {
  event.preventDefault();

  if (!postId) {
    console.error("Post ID not found in URL");
    return;
  }

  const title = document.getElementById("post-title").value.trim();
  const body = document.getElementById("post-body").value.trim();
  const tagsRaw = document.getElementById("post-tags").value.trim();
  const mediaUrl = document.getElementById("media-url").value.trim();
  const mediaAlt = document.getElementById("media-alt").value.trim();

  const tags = tagsRaw
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  editPost(postId, body, title, tags, mediaUrl, mediaAlt);
});

async function loadPostData() {
  const posts = await readPost(postId);
  const post = posts.data;
  if (!post) return;

  document.getElementById("post-title").value = post.title;
  document.getElementById("post-body").value = post.body;
  document.getElementById("post-tags").value = post.tags.join(", ");
  document.getElementById("media-url").value = post.media?.url || "";
  document.getElementById("media-alt").value = post.media?.alt || "";
}

document.getElementById("edit-post").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("post-title").value.trim();
  const body = document.getElementById("post-body").value.trim();
  const tagsRaw = document.getElementById("post-tags").value.trim();
  const mediaUrl = document.getElementById("media-url").value.trim();
  const mediaAlt = document.getElementById("media-alt").value.trim();

  const tags = tagsRaw
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  editPost(postId, body, title, tags, mediaUrl, mediaAlt).then(
    (updatedPost) => {
      if (updatedPost) {
        alert("Post updated successfully!");
        window.location.href = `../posts/feed.html`;
      }
    }
  );
});

loadPostData();
