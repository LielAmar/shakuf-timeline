import type { Config } from "tailwindcss";

const category_colors: string[] = [
  "#ff0000",
  "#00ff00",
  "#0000ff",
];

const config: Config = {
  purge: {
    safelist: [
      ...category_colors.map((color) => `bg-${color}`)
    ],
  },

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-days)'],
        sans: ['var(--font-narkis-block)'],
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
