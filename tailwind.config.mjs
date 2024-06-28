/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        foreground: "rgb(var(--foreground))",
        background: "rgb(var(--background))",
        backgroundLifted: "rgb(var(--background-lifted))",
        secondary: colors.gray[500],
      },
    },
  },
  plugins: [],
};
