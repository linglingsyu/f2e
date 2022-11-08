module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '540px',
      md: '720px',
      lg: '1320px',
    },
    container: {
      center: true,
      padding: '12px',
    },
    extend: {
      colors: {
        main: '#007FAB',
        'main-dark': '#003A4F',
        'main-light': '#B0D2DE',
        red: '#FF5136',
        'red-dark': '#CD331A',
        'red-light': '#FFB5A4',
        secondary: '#FFC37D',
        'secondary-dark': ' #A46039',
        'secondary-light': '#FFE2A9',
      },
      fontSize: {
        t16: '16px',
        t18: '18px',
        t20: '20px',
        t24: '24px',
        t28: '28px',
        t32: '32px',
        t44: '44px',
        t60: '60px',

      },
      letterSpacing: {
        widest: '.15em',
      },
    },
  },
  plugins: [],
}
