/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_black: "#1A1B1C",
        white: "#FFFFFF",
        red: "#FF0051",
        purple: "#C56EFF",
        my_gray: "#7E7E7E",
        light_gray: "#7e7e7e6f",
        turkois: "#80D9FF",
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      boxShadow: {
        card: "rgba(0, 0, 0, 0.3) 0 1px 3px",
      },
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.5rem",
      xl: "3rem",
    },
  },
  plugins: [],
};
