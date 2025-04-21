import { BASE_PATH } from "../api/constants.js";

export default async function router(pathname = window.location.pathname) {

  switch (pathname) {
    case `${BASE_PATH}`:
    case `${BASE_PATH}index.html`:
      await import("./views/home.js");
      break;
    case `${BASE_PATH}auth/login.html`:
      await import("./views/auth/login.js");
      break;
    case `${BASE_PATH}auth/register.html`:
      await import("./views/auth/register.js");
      break;
    case `${BASE_PATH}posts/feed.html`:
      await import("./views/post/feed.js");
      break;
    case `${BASE_PATH}posts/edit.html`:
      await import("./views/post/edit.js");
      break;
    case `${BASE_PATH}posts/create.html`:
      await import("./views/post/create.js");
      break;
    case `${BASE_PATH}profile/me.html`:
      await import("./views/profile/profile.js");
      break;
    case `${BASE_PATH}posts/view.html`:
      await import("./views/post/singlePost.js");
      break;
    case `${BASE_PATH}profile/user.html`:
      await import("./views/profile/usersProfile.js");
      break;
    default:
      await import("./views/notFound.js");
  }
}
