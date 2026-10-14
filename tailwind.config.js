/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        farm: {
          50: '#f2fbf4',
          100: '#e1f7e6',
          200: '#c5eed0',
          300: '#97deaa',
          400: '#62c57d',
          500: '#38a956',
          600: '#2b8a43',
          700: '#246e37',
          800: '#21572f',
          900: '#1d4829',
          950: '#0b2713',
        },
        earth: {
          50: '#fbf8f3',
          100: '#f5efe3',
          200: '#ebdeca',
          300: '#dcbe9f',
          400: '#c99a6f',
          500: '#b87c4a',
          600: '#aa653c',
          700: '#8d4e33',
          800: '#72402e',
          900: '#5e3629',
        },
        sun: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        }
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          '"Open Sans"',
          'sans-serif'
        ],
      },
    },
  },
  plugins: [],
};
