/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    fontFamily: {
      sf: ["sf", "sans-serif"],
    },
    extend: {
      keyframes: {
        spin: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 14))" },
        },
        scrollBack: {
          "0%": { transform: "translateX(calc(-250px * 14))" },
          "100%": { transform: "translateX(0)" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-reverse": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "spin-slow": "spin 18s linear infinite",
        scroll: "scroll 80s linear infinite",
        scrollBack: "scrollBack 80s linear infinite",
        "infinite-scroll": "infinite-scroll 60s linear infinite",
        "infinite-scroll-reverse":
          "infinite-scroll-reverse 60s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "skull-pattern": "url('/assets/patron.png')",
        "small-skull-pattern": "url('/assets/BG.png')",
      },
      colors: {
        wtfBlack: "#151515",
        wtfYellow: "#FFF505",
        wtfWhite: "#FFFFFF",
        wtfGrey: "#191919",
      },
    },
  },
  plugins: [require("tailwindcss-animated"), require("flowbite/plugin")],
};
