import { BASE_PATH } from "../api/constants";
import "../../assets/css/header.css";
export async function loadHeader() {
  if (document.getElementById("navigation-bar")) return;

  const nav = document.createElement("nav");
  nav.id = "navigation-bar";
  nav.className = "custom-nav";
  nav.innerHTML = `
    <div class="nav-container">
      <div class="nav-inner">
        <a href="../posts/feed.html">Home</a>
        <a href="../profile/me.html">Profile</a>
        <a href="../posts/create.html">Create</a>
        <a id="logout-button" href="">Log out</a>
      </div>
    </div>
  `;
  document.body.appendChild(nav);
}
