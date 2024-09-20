/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "coyu-blue": "#393AFB",
        black: "#171717",
        white: "#FFFFFF",
        grey: "#495057",
        "blue-bg": "#F3F4FF",
      },
      fontFamily: {
        hanken: ["Hanken Grotesk"],
        signature: ["Great Vibes"],
        typewrite: ["Special Elite"],
        write: ["Cutive"],
      },
    },
  },
  plugins: [],
};
