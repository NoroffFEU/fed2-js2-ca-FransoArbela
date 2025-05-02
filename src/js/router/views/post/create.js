import { authGuard } from "../../../utilities/authGuard.js";
import { loadHeader } from "/src/js/components/header.js";
import "../../../../assets/css/create.css";
import { createPost } from "../../../api/post/create.js";

loadHeader();

authGuard();
const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", async (event) => {
  event.preventDefault();

  const form = document.forms.createPost;
  const title = form.title.value;
  const body = form.body.value;
  const media = {
    url: form.mediaUrl.value,
    alt: form.mediaAlt.value,
  };
  const tags = form.tags.value.split(",");

  createPost({ title, body, tags, media });

  window.location.href = "../../../../../profile/me.html";
});
