import { createThemes } from 'tw-colors';

// types
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {},
  plugins: [
    createThemes({
      light: {
        primary_test: '#ccc'
      },
      dark: {
        primary_test: '#333'
      }
    })
  ]
};
export default config;
