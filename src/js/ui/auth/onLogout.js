
export function onLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("profile");
    window.location.href = "/auth/login.html";
}
