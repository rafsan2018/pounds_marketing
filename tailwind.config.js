/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        pangram: ['Pangram', 'sans-serif'],
        activegrotesk: ['Activegrotesk','sans-serif'],
        holiday: ['Holiday','sans-serif']
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      keyframes: {
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '45%': { transform: 'rotate(180deg)' },
        },
      },
      animation: {
        'spin-slow': 'spinSlow 5s linear infinite',
      },
      borderWidth:{
        '1': '1px'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}

