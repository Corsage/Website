/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'light-green-cyan': '#99ffcc',
        'green-cyan': '#99cccc',
        'dark-green-cyan': '#336633'
      }
    }
  },
  plugins: []
};
