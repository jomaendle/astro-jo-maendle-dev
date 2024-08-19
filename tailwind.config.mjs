/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        foreground: "rgb(var(--foreground))",
        background: "rgb(var(--background))",
        backgroundLifted: "rgba(var(--background-lifted))",
        backgroundLiftedEmphasized: "rgb(var(--background-lifted-emphasized))",
        secondary: "rgb(var(--forground-deemphasized))",
        border: "rgba(var(--border))",
        borderHover: "rgba(var(--border-hover))",
        dot: "rgba(66,66,66,0.8)",
      },
    },
  },
  plugins: [],
};
