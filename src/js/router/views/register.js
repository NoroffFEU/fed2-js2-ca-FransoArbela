import { onRegister } from "../../ui/auth/onRegister";
import { loadHeader } from '/src/assets/components/header.js';
import "/src/assets/css/login.css"
const form = document.forms.register;

loadHeader();
form.addEventListener("submit", onRegister);
