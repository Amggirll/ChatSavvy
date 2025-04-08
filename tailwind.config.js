/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 小清新风格的柔和色彩
        primary: {
          50: '#F5F9FF',
          100: '#E9F3FF',
          200: '#D4E6FF',
          300: '#AACBFF',
          400: '#7FADFF',
          500: '#5390FF', // 主色调
          600: '#3B7EFF',
          700: '#2563EB',
          800: '#1D4ED8',
          900: '#1E40AF',
        },
        secondary: {
          50: '#F7FEFD',
          100: '#E6FBFA',
          200: '#C7F6F3',
          300: '#9AEEE9',
          400: '#63DFD9',
          500: '#4ECDC4', // 次要色调
          600: '#38A89D',
          700: '#2C7A73',
          800: '#285E57',
          900: '#1F4743',
        },
        accent: {
          50: '#FFF4F4',
          100: '#FFEAEA',
          200: '#FFCCCC',
          300: '#FFB3B3',
          400: '#FF9494',
          500: '#FF7B7B', // 强调色
          600: '#FF5252',
          700: '#FF0000',
          800: '#CC0000',
          900: '#990000',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280', // 中性色
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'softer': '0 2px 10px -5px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
} 