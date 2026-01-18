/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
    './*.md',
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#000033',
        'primary-text': '#7fe599',
        'accent': '#fed576',
        'text-muted': '#5ca876',
        'card-bg': '#060C38',
        'card-hover': '#0C173D',
      },
      fontFamily: {
        'k2d': ['K2D', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(254, 213, 118, 0.3)',
        'glow-sm': '0 0 8px rgba(254, 213, 118, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'fade-in-down': 'fadeInDown 0.8s ease-in',
        'fade-in-up': 'fadeInUp 0.8s ease-in 0.2s both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
