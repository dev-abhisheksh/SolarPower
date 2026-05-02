/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with 'class' strategy
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#fbbf24', // yellow-400
          dark: '#f59e0b',  // yellow-500
        }
      }
    },
  },
  plugins: [],
}
