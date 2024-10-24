import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'airbnb':'#ff385c',
        // 'airbnb-dark':'#d50027'
        'airbnb':'#5562be',
        'airbnb-dark':'#343c79'
      },
    },
  },
  plugins: [],
};
export default config;
