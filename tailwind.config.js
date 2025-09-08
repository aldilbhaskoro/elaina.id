/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['"Fredoka One"', 'cursive'],
        varela: ['"Varela Round"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      colors: {
        cream: "#FFF8F1",
        ElainaBrown: "#2839a5ff",
        ElainaText: "#447278ff",
      },
    },
  },
  plugins: [],
}
