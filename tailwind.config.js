/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors:{
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      backgroundImage:{
        circularLight:'repeating-radial-gradient(rgba(0,0,0,0.4), #f5f5f5 5px, #f5f5f5 100px 20%);',
        circularDark:'repeating-radial-gradient(rgba(255,255,255,0.5), #1b1b1b 8px, #1b1b1b 100px 20%);'
      }
    },
  },
  plugins: [],
}

