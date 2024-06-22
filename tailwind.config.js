/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E7BF70",
        orange: "#F68F27",
        "pale-gray": "#F0ECE4",
      },

      fontFamily: {
        back: ["BACKCOUNTRY", "sans-serif"],
        matiz: ["Matiz", "sans-serif"],
      },
    },
  },
  plugins: [],
};
