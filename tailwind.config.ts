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
        'back-color': 'var(--back-color)',
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'accent-yellow': 'var(--accent-yellow)',
        'accent-red': 'var(--accent-red)',
        'accent-green': 'var(--accent-green)'
      }
    },
  },

  plugins: [],
};
export default config;
