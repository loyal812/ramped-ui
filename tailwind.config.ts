import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      '3xs': '320px',
      '2xs': '375px',
      xs: '520px',
      ...defaultTheme.screens,
      '3xl': '1780px'
    },
    // Extend default configurations
    extend: {
      colors: {
        text: {
          basic: "#262626",
          gray: "#B6B6B8",
          grey: "#8B8E95",
          blue: "#4C5BE5",
          cyan: "#118DE6",
          white: "#ffffff"
        },
        bg: {
          basic: "#eeeeee",
          white: "#ffffff",
          pink: "#514FE5"
        }
      },
      container: {
        center: true
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
