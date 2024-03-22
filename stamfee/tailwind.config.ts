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
        p10: "10%",
        p13: "13%",
        p30: "30%",
        "mypt-1": "5px",
        "mypt-2": "9px",
        "mypt-3": "13px",
        "mypt-4": "15px",
        "mypt-5": "14px",
      },
      margin: {
        m01: "1%",
        m02: "2%",
        m03: "3%",
        m10: "10%",
        m15: "15%",
        m20: "20%",
      },
      colors: {
        myColor: {
          coffee: "#E5B486",
          loginInfo: "rgba(31, 31, 31, 0.8)",
          loginInput: "rgba(247, 247, 247, 1)",
          loginInputBorder: "",
        },
      },
      width: {
        "w-65": "65%",
        w10: "10%",
        w15: "15%",
        w17: "17%",
        w20: "20%",
        w23: "23%",
        w25: "25%",
        w50: "50%",
        w60: "60%",
        w75: "75%",
        w80: "80%",
        w90: "90%",

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
        "browser-5": "24px",
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
        "small-size": "250px",
        "line-break": "300px",
        "mobile-size": "400px",
        "tablet-size": "700px",
        "browser-size": "1024px",
      },
      fontSize: {
        "small-0": "7px",
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

        "big-1": "24px",
        "big-2": "26px",
        "big-3": "28px",
        "big-4": "30px",
        "big-5": "32px",
      },
      boxShadow: {
        small: "0px 2px 2px 0px rgba(0, 0, 0, 0.2)",
        mobile: "0px 4px 4px 0px rgba(0, 0, 0, 0.2)",
        tablet: "0px 6px 6px 0px rgba(0, 0, 0, 0.2)",
        browser: "0px 8px 8px 0px rgba(0, 0, 0, 0.2)",
      },
      aspectRatio: {
        "5/1": "5 / 1",
        "4/1": "4 / 1",
        "3/1": "3 / 1",
        "7/1": "7 / 1",
        "7/2": "7 / 2",
        "6/5": "6 / 5",
        "6/1": "6 / 1",
        "8/1": "8 / 1",
        "10/1": "10 /1",
      },
      gap: {
        gap1: "1%",
        gap2: "2%",
        gap3: "3%",
        gap5: "5%",
      },
      rotate: {
        225: "225deg",
      },
      spacing: {},
      letterSpacing: {
        wwww: "0.3rem",
      },
    },
  },
  plugins: [],
};
export default config;
