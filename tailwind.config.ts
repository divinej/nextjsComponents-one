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
        white: '#ffffff',
        cream: '#F2EAE2',
        saurus: '#6C7289',
        aquamarine: '#3D8768',
        'deep-aquamarine': '#1A4032',
        gunmetal: '#1C232B',
      },
      fontFamily: {
        heading: ['Fraunces', 'san-serif'],
        body: ['Montserrat', 'san-serif'],
      },
      fontSize: {
        '2xl': '2rem',
      },
      borderRadius: {
        'xl': "0.625rem"
      },
      maxWidth: {
        'xl': "37.5rem"
      },
    },
  },
  plugins: [],
};
export default config;
