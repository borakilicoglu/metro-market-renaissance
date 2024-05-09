import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-raleway)"],
      },
      backgroundImage: {
        "header-gradient": "linear-gradient(90deg, #1A3C7B 0%, #1e2044 100%)", // Custom gradient name
      },
      colors: {
        primary: "#1a3c7b",
        dark: "#1f2043",
        smoke: "#ecf0f4",
        clay: "#6f7e8f",
        secondary: "#ffe500",
      },
      container: {
        center: true, // Centers the container
        screens: {
          sm: "640px", // Custom width for small screens
          md: "768px", // Custom width for medium screens
          lg: "1024px", // Custom width for large screens
          xl: "1280px", // Custom width for extra large screens
          "2xl": "1280px", // Custom width for 2xl screens
        },
      },
    },
  },
  plugins: [],
};
export default config;
