/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      MobileS: "320px",
      MobileM: "375px",
      MobileL: "425px",
      Tablet: "768px",
      Laptop: "1024px",
      LaptopL: "1440px",
      WideS: "2560px",
    },
    extend: {
      screens: {
        MobileS: "1px",
      },
    },
  },
  plugins: [],
};
