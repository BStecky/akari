module.exports = {
  content: ["/components/layout.js", "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px"
      },
      fontFamily: {
        acier: "'acier-bat-solid'",
        acierOutline: "'acier-bat-outline'"
      },
      rotate: {
        '270': "270deg"
      },
      fontSize: {
        '8xl': '7rem',
        '9xl': '9rem'
      },
      colors: {
        sitePurple: '#140027',
        darkPurple: '#0F001D',
        darkGray: '#181a1c',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100'
      },
      boxShadow: {
        'innerLg': "box-shadow: inset 0 16px 32px 0 rgba(0, 0, 0, 0.7)"
      },
      backgroundImage: {
        'teambg': "url('/teambg.svg')",
        'carouselbg': "url('/carouselbg.svg')",
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
