/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        primary: '#27b67e',
        primaryDark: '#1e8f63',
        secondary: '#1f2937',
        light: '#ffffff',
        bg: '#f8fafc',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(39, 182, 126, 0.1)',
        'nav': '0 10px 40px -10px rgba(0,0,0,0.08)',
      }
    }
  }
}

