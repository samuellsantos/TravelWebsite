/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./src/assets/background.png')",
        holiday: "url('./src/assets/backgroundHolidaySection.jpg')",
      },
      colors: {
        'dark-blue-opacity': '##0b1d27b9',
        'light-blue': '##0d3d57',
        'dark-blue': '##0b1d27',
        cyan: '#00C2C5',
        'cyan-hover': '#00c2c5d1',
        'transparent-black': '#00000097',
        'transparent-black2': '#00000052',
        'transparent-white': '#ffffff26',
        blue: '#003044',
      },
      fontFamily: {
        marko: ['Marko One'],
      },
    },
  },
  plugins: [],
};
