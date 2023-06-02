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
          300: "#3695e2",
        },
        brandingGreen: {
          400: "#69b338",
        },
        brandingGrey: {
          700: "#202020",
        },
      },
    },
  },
  plugins: [],
};
