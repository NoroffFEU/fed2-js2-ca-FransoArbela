export function loginListener() {
  
  const token = localStorage.getItem("token");

  const path = window.location.pathname;

  if (token && (path  === "/" || path === "/auth/login.html" || path === "/auth/register.html")) {
    window.location.href = "/profile/me.html";
  }
}