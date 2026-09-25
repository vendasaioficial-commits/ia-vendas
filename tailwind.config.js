/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08090b',
          900: '#0b0d10',
          800: '#121417',
          700: '#181b1f',
          600: '#212429',
          500: '#2a2e34',
        },
        mist: {
          400: '#6b7178',
          300: '#9aa0a8',
          200: '#c4c8cd',
          100: '#e9ebed',
        },
        signal: {
          500: '#2fc9b8',
          400: '#3ee0cf',
          300: '#7aeadf',
          950: '#0c2320',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      maxWidth: {
        content: '1180px',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
}
