import "/src/scss/login.scss"
import { onLogin } from "../../ui/auth/onLogin";

const form = document.forms.login;

form.addEventListener("submit", onLogin);



// this do the feeding to the actual function

