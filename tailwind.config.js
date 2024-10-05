/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff9b24', 
        secondary: '#0fc0b3',
        periwinkleblue:"#7c81ff",
        skyblue:"#00b9f1",
        coralpink:"#ff577b",
        salmonpink:"#ff7c7c"
      },
    },
  },
  plugins: [],
}

