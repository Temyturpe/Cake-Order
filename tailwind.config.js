/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "850px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536",
    },
    extend: {
      fontFamily: {
        play: ["Playfair"],
        open: ["Open Sans"],
      },
      backgroundImage: {
        multi: 'url("./assets/images/multi.PNG")',
        subg: 'url("./assets/subbg.png")',
      },
      backgroundColor: {
        dark: "#725654",
        lite: "#f2ede8",
        mid: "#bf8b81",
      },
      textColor: {
        dark: "#725654",
        myblack: '#585757',
      },
    },
  },
  plugins: [],
};
