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
        bottom: "20vh",
        logoHeight: "20%",
        "mypt-1": "5px",
        "mypt-2": "9px",
        "mypt-3": "13px",
        "mypt-4": "15px",
        "mypt-5": "14px",
      },
      margin: {
        m10: "10%",
        m20: "20%",
      },
      colors: {
        myColor: {
          coffee: "#E5B486",
          loginInfo: "rgba(31, 31, 31, 0.8)",
        },
      },
      width: {
        "w-65": "65%",
        w10: "10%",
        w20: "20%",
        w50: "50%",
        w60: "60%",
        w75: "75%",
        w80: "80%",
      },
      height: {
        h10: "10%",
        h20: "20%",
        h70: "70%",
        h85: "85%",
      },
      minHeight: {
        "sh-50": "50vh",
      },
      screens: {
        "mobile-size": "400px",
        "tablet-size": "700px",
        "browser-size": "1024px",
      },
      fontSize: {
        "small-1": "9px",
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
      boxShadow: {
        small: "0px 2px 2px 0px rgba(0, 0, 0, 0.2)",
        mobile: "0px 4px 4px 0px rgba(0, 0, 0, 0.2)",
        tablet: "0px 6px 6px 0px rgba(0, 0, 0, 0.2)",
        browser: "0px 8px 8px 0px rgba(0, 0, 0, 0.2)",
      },
      aspectRatio: {
        "6/5": "6 / 5",
        "6/1": "6 / 1",
      },
      gap: {
        gap3: "3%",
      },
      rotate: {
        225: "225deg",
      },
      spacing: {},
    },
  },
  plugins: [],
};
export default config;
