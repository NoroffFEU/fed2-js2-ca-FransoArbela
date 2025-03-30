/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,css}",  // this covers all your views + CSS
    "./post/**/*.html",          // you have HTML here too
    "./auth/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

