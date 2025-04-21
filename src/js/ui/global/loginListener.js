import { BASE_PATH } from "../../api/constants";


export function loginListener() {
  
  const token = localStorage.getItem("token");

  const path = window.location.pathname;

  if (token && (path  === `${BASE_PATH}` || path === `${BASE_PATH}auth/login.html` || path === `${BASE_PATH}auth/register.html`)) {
    window.location.href = `${BASE_PATH}profile/me.html`;
  }
}