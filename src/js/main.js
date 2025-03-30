// Import our custom CSS
import '../assets/css/main.css';
import router from "./router";
import { loginListener } from "./ui/global/loginListener";
import { loadHeader } from '../assets/components/header.js';


(async () => {
    try {
      await router(window.location.pathname);
    } catch (error) {
      console.error("Error in router:", error);
    }
  })();
  loginListener()
  loadHeader();
  loadHeader()