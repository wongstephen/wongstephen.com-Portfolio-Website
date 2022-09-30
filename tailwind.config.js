/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jiy",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    color: {
      primary: "--var(--primary-color)",
      seconadary: "--var(--secondary-color)",
    },
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        emerald: "#265C00",
        greenbean: "#68A225",
        lightgreen: "#B3DE81",
        cotton: "#FDFFFF",
        color1: "#78c4d2",
        color2: "#efc41c",
      },
      padding: {
        "1/2": "50%",
        full: "100%",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
