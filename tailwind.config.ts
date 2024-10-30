import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "#ED8C00",
      },
      fontFamily: {
        proxima: [
          '"proxima-nova"',
          '"Helvetica Neue"',
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
      },
      fontWeight: {
        "300": "300",
      },
      lineHeight: {
        tight: "1.6",
      },
      fontSize: {
        base: ["18px", "1.6"],
      },
    },
  },
  plugins: [],
};
export default config;
