/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B0000",      // đỏ hoàng gia
        secondary: "#C9A227",    // vàng cổ
        background: "#F8F5F0",   // giấy cổ
        text: "#2C2C2C",         // chữ chính
        accent: "#5A3E2B",       // nâu cổ
      },

      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};