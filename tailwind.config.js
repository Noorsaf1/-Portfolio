/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1', // Indigo
        secondary: '#f97316', // Orange
        accent: '#ec4899', // Pink
        dark: '#1e293b', // Slate-800
        light: '#f8fafc', // Slate-50
        muted: '#94a3b8', // Slate-400
        surface: '#ffffff',
        'surface-hover': '#f1f5f9', // Slate-100
        'primary-light': '#e0e7ff', // Indigo-100
        'secondary-light': '#ffedd5', // Orange-100
        'accent-light': '#fce7f3', // Pink-100
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'elegant': '0 10px 30px 0px rgba(0, 0, 0, 0.05)',
        'card': '0 0 20px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-soft': 'linear-gradient(to right, #e0e7ff, #fce7f3)',
      },
    },
  },
  plugins: [],
} 