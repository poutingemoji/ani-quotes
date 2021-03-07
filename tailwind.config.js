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
        foreground: {
          transparent: "rgba(21,31,46, 0.75)",
          lighter: "#284160",
          light: "#152232",
          DEFAULT: "#151f2e",
        },
        background: {
          DEFAULT: "rgb(11,22,34)",
          transparent: "rgba(11,22,34, 0.75)",
        },
        text: {
          lighter: "#c5cdd7",
          light: "#b6c1cd",
          DEFAULT: "rgb(159,173,189)",
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
