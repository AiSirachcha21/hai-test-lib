/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
      },
    },
    colors: {
      violet: {
        DEFAULT: "#7543FF",
        dark: "#5F38CC",
        light: "#9A76FF",
        extralight: "#C8B4FF",
      },
      success: {
        DEFAULT: "#20C997",
        dark: "#229A77",
        light: "#5EEFC4",
      },
      info: {
        DEFAULT: "#3194FF",
        dark: "#0068D8",
        light: "#6EB3FF",
      },
      warning: {
        DEFAULT: "#FFC107",
        dark: "#FFA800",
        light: "#FFD65A",
      },
      danger: {
        DEFAULT: "#F95F5F",
        dark: "#D44A4A",
        light: "#FF8484",
      },
      white: "#fff",
      black: "#000",
      gray: colors.gray,
      neutral: {
        purple: "#F6F3FF",
        blue: "#EBF5FF",
      },
      transparent: "transparent",
    },
  },
  plugins: [],
};
