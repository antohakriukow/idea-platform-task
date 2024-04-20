import {
  COLOR_BACKGROUND,
  COLOR_PRIMARY_100,
  COLOR_PRIMARY_500,
  COLOR_SECONDARY,
} from './src/app/shared/styles/colors';
import type { Config } from 'tailwindcss';
const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
      background: COLOR_BACKGROUND,
      primary: {
        100: COLOR_PRIMARY_100,
        500: COLOR_PRIMARY_500,
      },
      secondary: COLOR_SECONDARY,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
