/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
<<<<<<< HEAD
          DEFAULT: '#073B6B',
          light: '#0d4a85',
          dark: '#052c52',
        },
        'section-bg': '#F8FAFC',
        primary: {
          DEFAULT: '#F7931D',
          hover: '#F39314',
          light: '#fff4e6',
        },
        accent: {
          DEFAULT: '#7B191E',
          light: '#9e2a31',
        },
        'bg-dark': '#2A1608',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        outfit: ['Outfit', 'Inter', 'sans-serif'],
=======
          DEFAULT: '#1E3A5F',
          light: '#2a4d7a',
          dark: '#152c49',
        },
        'section-bg': '#F0F4F8',
        primary: {
          DEFAULT: '#2563EB',
          hover: '#1d4ed8',
          light: '#dbeafe',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7
      },
    },
  },
  plugins: [],
}
