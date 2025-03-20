import { login } from "../../api/auth/login";

export async function onLogin(event) {
  event.preventDefault();
  const form = event.currentTarget;

  const email = form.email.value;
  const password = form.password.value;

  try {
    await login(email, password);
  } catch (error) {
    console.error("Login error:", error);
  }
}
// this do the feeding to the actual function
