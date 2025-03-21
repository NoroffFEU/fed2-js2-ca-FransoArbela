import { onRegister } from "../../ui/auth/onRegister";
import "/src/scss/login.scss"
const form = document.forms.register;

form.addEventListener("submit", onRegister);
