import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryText': '#64FFD5',
        'custom-green': '#22863a',
        'darkTheme' : '#16191d'
      },
      fontFamily: {
        fira: ['"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'main-page': '#112240',
        'main-page-specific': '#112240',
      },
    },
  },
  plugins: [nextui()],
};
export default config;
