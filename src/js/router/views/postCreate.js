import { onCreatePost } from "../../ui/post/onCreate.js";
import { authGuard } from "../../utilities/authGuard";
import { loadHeader } from '/src/assets/components/header.js';

loadHeader();

authGuard();

const form = document.forms.createPost;

form.addEventListener("submit", onCreatePost);
