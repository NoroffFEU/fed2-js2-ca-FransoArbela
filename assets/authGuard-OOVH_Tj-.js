function o(){localStorage.removeItem("token"),localStorage.removeItem("profile"),window.location.href="/auth/login.html"}function t(){document.querySelector("#logout-button")?.addEventListener("click",()=>{o(),console.log("logout button clicked")})}function n(){localStorage.token||(alert("You must be logged in to view this page"),window.location.href="/auth/login.html"),t()}export{n as a};
