import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  appType: "mpa",
  base: "/fed2-js2-ca-FransoArbela/",
  build: {
    target: "esnext",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        login: resolve(__dirname, "./auth/login.html"),
        auth: resolve(__dirname, "./auth/index.html"),
        register: resolve(__dirname, "./auth/register.html"),
        profile: resolve(__dirname, "./profile/me.html"),
        profileUser: resolve(__dirname, "./profile/user.html"),
        postFeed: resolve(__dirname, "./posts/feed.html"),
        postView: resolve(__dirname, "./posts/view.html"),
        postCreate: resolve(__dirname, "./posts/create.html"),
        postEdit: resolve(__dirname, "./posts/edit.html"),
      },
    },
  },
});
