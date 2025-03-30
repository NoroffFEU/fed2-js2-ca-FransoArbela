// This function controls which JavaScript file is loaded on which page
// In order to add additional pages, you will need to implement them below
// You may change the behaviour or approach of this file if you choose



export default async function router(pathname = window.location.pathname) {
  switch (pathname) {
    case "/":
    case "/index.html":
      await import("./views/home.js");
      break;
    case "/auth/login.html":
      await import("./views/login.js");
      break;
    case "/auth/register.html":
      await import("./views/register.js");
      break;
    case "/posts/feed.html":
      await import("./views/feed.js");
      break;
    case "/posts/edit.html":
      await import("./views/postEdit.js");
      break;
    case "/posts/create.html":
      await import("./views/postCreate.js");
      break;
    case "/profile/me.html":
      await import("./views/profile.js");
      break;
    case "/posts/view.html":
      await import("./views/viewPost.js");
      break;
    case "/profile/user.html":
      await import("./views/usersProfile.js");
      break;
    default:
      await import("./views/notFound.js");
  }
}
