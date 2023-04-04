/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./src/assets/background.png')",
      },
      colors: {
        'dark-blue-opacity': '##0b1d27b9',
        'dark-blue': '##0b1d27',
        cyan: '#00C2C5',
        'cyan-hover': '#00c2c5d1',
        'transparent-black': '#00000097',
        'transparent-black2': '#00000052',
        'transparent-white': '#ffffff26',
      },
      fontFamily: {
        marko: ['Marko One'],
      },
    },
  },
  plugins: [],
};
