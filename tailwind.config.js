/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: "'Barlow', sans",
      },
      colors: {
        primary: {
          violet: "var(--clr-primary-violet)",
          grayblue: "var(--clr-primary-grayblue)",
          blackblue: "var(--clr-primary-blackblue)",
          heliotrope: "var(--clr-primary-heliotrope)",
        },
        neutral: {
          lightgray: "var(--clr-neutral-lightgray)",
          gray: "var(--clr-neutral-gray)",
          grayblue: "var(--clr-neutral-grayblue)",
        },
      },
    },
  },
  plugins: [],
}

