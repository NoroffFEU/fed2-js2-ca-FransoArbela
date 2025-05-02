import { onRegister } from "../../../ui/auth/onRegister";
import { loadHeader } from "/src/js/components/header.js";
import "/src/assets/css/login.css";
loadHeader();

const form = document.forms.register;
form.addEventListener("submit", onRegister);
