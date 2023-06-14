/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Theme Colors
        primary: '#007AFF',
        // Dark Theme Colors
        dark: {
          primary: '#7F00FF',
        },
      },
    },
  },
  variants: {
    extend: {
      brightness: ['dark'],
    },
  },
  plugins: [require("daisyui")],
}

