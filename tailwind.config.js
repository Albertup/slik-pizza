/** @type {import('tailwindcss').Config} */



module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      
      fontFamily: {
        'Staatliches': ['Staatliches', 'sans-serif'],
        'Bebas': ['Bebas Neue', 'sans-serif'],
      },
      width: {
        150: "150px",
        190: "190px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        80: "80px",
        150: "150px",
        225: "225px",
        300: "300px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        650: "650px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        headingColor: "#000000",
        headingBlack: "#FFFFFF",
        textColor: "#000000",
        cartNumBg: "#8F8F8F",
        primary: "#FFFFFF",
        cardOverlay: "rgba(256,256,256,0.4)",
        lighttextGray: "#9ca0ab",
        card: "rgba(256,256,256,0.8)",
        cartBg: "#282a2c",
        cartItem: "#2e3033",
        cartTotal: "#343739",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require('flowbite/plugin')
  ],
}