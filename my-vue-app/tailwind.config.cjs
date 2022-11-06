/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        c_blue: "#2a2963",   // màu xanh dương đậm 
        c_yellow: '#FCF54C',  // màu vàng
        c_red: '#E33539',   //màu đỏ
        c_gray: '#9C9C9C',  // màu xám
      },
    },
  },
  plugins: [],
}
