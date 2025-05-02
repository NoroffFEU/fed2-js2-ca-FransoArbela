import { register } from "../../api/auth/register";
export function onRegister(event) {
  event.preventDefault();
  const form = event.currentTarget;

  const email = form.email.value;
  const password = form.password.value;
  const name = form.name.value;
  const bio = form.bio.value;
  const banner = {
    url: form.banner.value,
    alt: "",
  };
  const avatar = {
    url: form.avatar.value,
    alt: "Avatar",
  };

  register({ email, password, name, bio, banner, avatar });
}
