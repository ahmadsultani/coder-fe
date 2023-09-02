import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          light: "#E4E4E4",
          "light-hover": "#DEDEDE",
          "light-active": "#D7D7D7",
          normal: "#C2C2C2",
          "normal-hover": "#A5A5A5",
          "normal-active": "#8E8E8E",
          dark: "#444444",
          "dark-hover": "#313131",
          "dark-active": "#151515",
          gray: "#727272",
        },
        primary: {
          light: "#FFF9E6",
          "light-hover": "#FCF4D9",
          "light-active": "#F9E9B1",
          normal: "#EBB702",
          "normal-hover": "#D4A502",
          "normal-active": "#BC9202",
          dark: "#B08902",
          "dark-hover": "#8D6E01",
          "dark-active": "#6A5201",
          darker: "#524001",
        },
        secondary: {
          black: "#151515",
          white: "#FFFFFF",
        },
      },
      fontSize: {
        "text-s": [
          "12px",
          {
            lineHeight: "16px",
          },
        ],
        "text-m": [
          "14px",
          {
            lineHeight: "20px",
          },
        ],
        "text-l": [
          "16px",
          {
            lineHeight: "24px",
          },
        ],
        "heading-s": [
          "20px",
          {
            lineHeight: "28px",
          },
        ],
        "heading-m": [
          "28px",
          {
            lineHeight: "36px",
          },
        ],
        "heading-l": [
          "36px",
          {
            lineHeight: "44px",
          },
        ],
        "heading-xl": [
          "64px",
          {
            lineHeight: "72px",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
