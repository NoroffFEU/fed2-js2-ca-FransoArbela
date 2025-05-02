import { readPosts } from "/src/js/api/post/read.js";
import { readProfile } from "../../../api/profile/read.js";
import { authGuard } from "../../../utilities/authGuard.js";
import "/src/assets/css/feed.css";
import "../../../../assets/css/post.css";
import { formatPostData, postHTML } from "./postGenerate.js";
import { postInteraction } from "./postInteraction.js";
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

let currentPage = 12;

function loadPosts(pageSize) {
  showSkeletons();

  readPosts(pageSize, 1).then((posts) => {
    removeSkeletons();
    renderPosts(posts.data);
  });
}


  loadPosts(currentPage);


window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
    currentPage += 4;
    loadPosts(currentPage);
  }
});


function createSkeletonPost() {
  const skeleton = document.createElement("div");
  skeleton.classList.add("skeleton-post");

  skeleton.innerHTML = `
    <div class="skeleton skeleton-avatar"></div>
    <div class="skeleton skeleton-line" style="width: 60%"></div>
    <div class="skeleton skeleton-line" style="width: 100%; height: 200px"></div>
    <div class="skeleton skeleton-line" style="width: 80%"></div>
  `;

  return skeleton;
}

function showSkeletons(count = 3) {
  for (let i = 0; i < count; i++) {
    postContainer.appendChild(createSkeletonPost());
  }
}

function removeSkeletons() {
  document.querySelectorAll(".skeleton-post").forEach((el) => el.remove());
}

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
