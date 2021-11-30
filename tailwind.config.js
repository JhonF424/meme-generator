// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: 
    { // https://tailwindcss.com/docs/customizing-colors#color-palette-reference
      colors: {
        teal: colors.teal,
        'orange': colors.orange,
        'light-blue': colors.sky,
        gray: {
          light: 'var(--gray-light)',
          DEFAULT: 'var(--gray-default)',
          dark: 'var(--gray-dark)'
        },
        primary: {
          light: 'var(--primary-light)',
          DEFAULT: 'var(--primary-default)',
          dark: 'var(--primary-dark)'
        },
        secondary: {
          light: 'var(--secondary-light)',
          DEFAULT: 'var(--secondary-default)',
          dark: 'var(--secondary-dark)'
        },
        success: {
          light: 'var(--success-light)',
          DEFAULT: 'var(--success-default)',
          dark: 'var(--success-dark)'
        },
        info: {
          light: 'var(--info-light)',
          DEFAULT: 'var(--info-default)',
          dark: 'var(--info-dark)'
        },
        warning: {
          light: 'var(--warning-light)',
          DEFAULT: 'var(--warning-default)',
          dark: 'var(--warning-dark)'
        },
        danger: {
          light: 'var(--danger-light)',
          DEFAULT: 'var(--danger-default)',
          dark: 'var(--danger-dark)'
        }
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}