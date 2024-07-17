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
        border: "rgba(255,255,255,0.3)",
        dot: "rgba(66,66,66,1)",
      },
    },
  },
  plugins: [],
};
