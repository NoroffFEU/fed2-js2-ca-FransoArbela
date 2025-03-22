import { onLogout } from "../auth/onLogout";

export function setLogoutListener() {
  const logoutBtn = document.querySelector("#logout-button");

  logoutBtn.addEventListener("click", () => {
    onLogout();
    console.log("logout button clicked");
  });
}
// this do the listening