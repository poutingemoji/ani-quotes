module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: "Overpass",
      body: "Roboto",
    },

    extend: {
      colors: {
        background: "rgb(11,22,34)",
        foreground: "rgb(21,31,46)",
        "foreground-gray": "rgb(15,22,31)",
        "foreground-gray-dark": "rgb(6,12,19)",
        "foreground-blue": "rgb(15,22,31)",
        "foreground-blue-dark": "rgb(6,12,19)",
        text: "rgb(159,173,189)",
        "text-light": "rgb(114,138,161)",
        "text-lighter": "rgb(133,150,165)",
        "shadow-blue": "rgb(0,5,15)",
        blue: "rgb(61,180,242)",
        green: "rgb(74,189,78)",
        gray: {
          1200: "rgb(251,251,251)",
          1100: "rgb(240,243,246)",
          1000: "rgb(221,230,238)",
          900: "rgb(201,215,227)",
          800: "rgb(173,192,210)",
          700: "rgb(139,160,178)",
          600: "rgb(116,136,153)",
          500: "rgb(100,115,128)",
          400: "rgb(81,97,112)",
          300: "rgb(30,42,56)",
          200: "rgb(11,22,34)",
          100: "rgb(21,31,46)",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
