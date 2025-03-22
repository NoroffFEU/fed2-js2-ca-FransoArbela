export function loginListener() {
  
  const token = localStorage.getItem("token");

  const path = window.location.pathname;

  if (token && (path  === "/" || path === "/auth/login/" || path === "/auth/register/")) {
    window.location.href = "/profile/index.html";
  }
}