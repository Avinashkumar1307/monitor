/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aktiv-grotesk': ['Aktiv Grotesk Trial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}