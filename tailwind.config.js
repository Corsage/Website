/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'green-cyan': '#89D9C6',
        'dark-green-cyan': '#1D594B'
      }
    }
  },
  plugins: []
};
