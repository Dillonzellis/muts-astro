/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        brandingBlue: {
          400: "#005397",
        },
        brandingGreen: {
          400: "#69b338",
        },
      },
    },
  },
  plugins: [],
};
