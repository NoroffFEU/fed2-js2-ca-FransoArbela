// Import our custom CSS
import '../scss/style.scss'
import router from "./router";
import { loginListener } from "./ui/global/loginListener";

(async () => {
    try {
      await router(window.location.pathname);
    } catch (error) {
      console.error("Error in router:", error);
    }
  })();

  loginListener()