module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "screen/2": "50vh",
        "screen/3": "33vh",
      },
      colors: {
        primary: {
          light: "#152232",
          DEFAULT: "#151f2e",
          transparent: "rgba(21,31,46, 0.75)",
        },
        secondary: {
          DEFAULT: "rgb(11,22,34)",
          transparent: "rgba(11,22,34, 0.75)",
        },
        gray: {
          DEFAULT: "#e0e0e0",
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
