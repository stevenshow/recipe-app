module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        lobster: ['Lobster', 'cursive'],
        lato: ['Lato', 'sans-serif'],
        arial: ['Arial', 'sans-serif'],
        georgia: ['Georgia', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#FFA500', // Primary color
          coral: '#FF7F50', // Coral shade
        },
        accent: {
          herbGreen: '#47A04B', // Herb green
          mintGreen: '#009B77', // Mint green
        },
        body:{
          gray: '#333333',
          DEFAULT: '#000000',
        }
      },
      backgroundColor: { // Put it here directly under extend
        DEFAULT: '#FDFDFD', // Background color
        beige: '#F5F5DC', // Beige shade
        lightGray: '#F7F7F7', // Light gray shade
      },
    },
  },
  plugins: [],
};
