module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000", "900_7e": "#0000007e", "900_59": "#00000059" },
        white: { A700_7e: "#ffffff7e", A700_19: "#ffffff19", A700: "#ffffff" },
        gray: {
          200: "#e9e9eb",
          800: "#3e3e3e",
          "800_01": "#524b4b",
          "900_f9": "#222222f9",
          "200_bf": "#e9e9ebbf",
          "800_5b": "#3c3c435b",
        },
        blue: { A200: "#468cf7" },
        indigo: { A100: "#7199fe" },
        pink: { A400: "#de005d" },
        light_blue: { A700: "#0a84ff" },
      },
      fontFamily: { poppins: "Poppins", jost: "Jost" },
      backgroundImage: {
        gradient: "linear-gradient(131deg ,#000000,#222222f9)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
