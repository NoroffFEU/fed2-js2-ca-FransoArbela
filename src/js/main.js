import "../assets/css/main.css";
import router from "./router/index.js";
import { loginListener } from "./ui/global/loginListener.js";
import { loadHeader } from "../js/components/header.js";
import "https://kit.fontawesome.com/553a084866.js";

(async () => {
  try {
    await router(window.location.pathname);
  } catch (error) {
    console.error("Error in router:", error);
  }
})();
loginListener();
loadHeader();
loadHeader();
