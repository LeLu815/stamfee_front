import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: {
        logoHeight: "20%",
      },
      colors: {
        myColor: {
          coffee: "##E5B486",
        },
      },
      width: {
        "w-65": "65%",
      },
      screens: {
        "mobile-size": "400px",
        "tablet-size": "700px",
        "browser-size": "1024px",
      },
      fontSize: {
        "small-1": "10px",
        "small-2": "11px",
        "small-3": "12px",
        "small-4": "13px",
        "small-5": "15px",

        "mobile-1": "14px",
        "mobile-2": "16px",
        "mobile-3": "18px",
        "mobile-4": "20px",
        "mobile-5": "22px",

        "tablet-1": "15px",
        "tablet-2": "16px",
        "tablet-3": "18px",
        "tablet-4": "20px",
        "tablet-5": "22px",

        "browser-1": "16px",
        "browser-2": "18px",
        "browser-3": "18px",
        "browser-4": "20px",
        "browser-5": "22px",
      },
    },
  },
  plugins: [],
};
export default config;
