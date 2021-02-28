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
        primary: {
          light: "#1e2d43",
          DEFAULT: "rgb(21,31,46)",
          transparent: "rgba(21,31,46, 0.5)",
        },
        secondary: {
          DEFAULT: "rgb(11,22,34)",
          transparent: "rgba(11,22,34, 0.5)",
        },
        gray: {
          DEFAULT: "rgb(201,215,227)",
        },
        green: {
          DEFAULT: "rgb(74,189,78)",
        },
        blue: {
          DEFAULT: "rgb(61,180,242)",
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
