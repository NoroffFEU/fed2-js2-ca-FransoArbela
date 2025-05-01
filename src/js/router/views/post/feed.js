import { readPosts } from "/src/js/api/post/read.js";
import { readProfile } from "../../../api/profile/read.js";
import { authGuard } from "../../../utilities/authGuard.js";
import "/src/assets/css/feed.css";
import "../../../../assets/css/post.css";
import {
  formatPostData,
  postInteraction,
  postHTML,
} from "./postGenerate.js";
import { searchPosts } from "../../../api/post/search.js";

authGuard();


const searchInput = document.querySelector("#search");
export const postContainer = document.querySelector(".posts");

function renderPosts(posts) {
  postContainer.innerHTML = "";

  posts.forEach((post) => {
    const postInfo = formatPostData(post);
    postContainer.appendChild(postHTML(postInfo));
  });

  postInteraction();
}

searchInput.addEventListener("input", async () => {
  const query = searchInput.value.trim();

  if (query.length > 1) {
    try {
      const result = await searchPosts(query);
      if (result.data.length === 0) {
        postContainer.innerHTML = `<p class="no-result">No results found</p>`;
        return;
      }
      renderPosts(result.data);
    } catch (err) {
      console.error("Search failed:", err);
    }
  } else {
    const result = await readPosts(12, 1);
    renderPosts(result.data);
  }
});

readPosts(12, 1).then((posts) => {
  renderPosts(posts.data);
});

const profileJSON = localStorage.getItem("profile");
const profile = JSON.parse(profileJSON);

readProfile(profile.name).then((profileData) => {
  const profileImg = document.querySelector("#profile-img");
  const profileUsername = document.querySelector("#profile-username");
  const profileBio = document.querySelector("#profile-bio");

  profileImg.src = profileData.data.avatar.url;
  profileUsername.textContent = profileData.data.name;
  profileBio.textContent = profileData.data.bio;
});
