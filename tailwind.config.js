/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        carattere: ["Carattere", "cursive"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        bgDark: "hsl(var(--color-bg-dark) / <alpha-value>)",
        bgDarkMute: "hsl(var(--color-bg-dark-mute) / <alpha-value>)",
        content: "hsl(var(--color-content) / <alpha-value>)",
        contentHighlight: "hsl(var(--color-content-highlight)  / <alpha-value>)",
        buttonMain: "hsl(var(--color-button) / <alpha-value>)",
        buttonHover: "hsl(var(--color-button-hover)  / <alpha-value>)",
        skillBg: "hsl(var(--color-skill-bg)  / <alpha-value>)",
        skillBgHover: "hsl(var(--color-skill-bg-hover)  / <alpha-value>)",
        skillShadow: "hsl(var(--color-skill-shadow)  / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
