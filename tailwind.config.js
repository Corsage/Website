/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/templates/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      serif: ['Inter'],
      mono: ['Fira Code']
    },

    extend: {
      colors: {
        accent: '#89D9C6',
        'dark-accent': '#508074',
        black: '#010606',
        white: '#F8F9F8',
        cyan: '#668B89',
        'light-cyan': '#9DADAC',
        'medium-cyan': '#1b3a37',
        'dark-cyan': '#334D4B',
        cusdis: '#1c1b22'
      }
    }
  },
  plugins: []
};
