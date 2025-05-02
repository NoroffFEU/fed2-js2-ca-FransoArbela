import "/src/assets/css/login.css";
import { onLogin } from "../../../ui/auth/onLogin";
import { loadHeader } from "/src/js/components/header.js";
loadHeader();
const form = document.forms.login;

form.addEventListener("submit", onLogin);
