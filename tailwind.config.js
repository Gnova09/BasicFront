/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  plugins: [
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'slide-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-70px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        
      },
      animation: {
        'fade-in-up': 'fade-in-up 1.0s ease-out',
        'slide-right': 'slide-right 1.0s ease-out'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#ffffff',
        'letters': '#000000',
        'secondary': '#66B3E8',
        'purple': '#3f3cbb',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'black': '#000000',
        'green': '#2ECC71'
      },
    }
  },

}
