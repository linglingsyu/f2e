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
        main: '#6029F5',
        'main-dark': '#895CDD',
        'main-light': '#B79CFF',
        warn: '#F8CC46',
        'warn-dark': '#DFB73F',
        'warn-light': '#FFE79E',
        info: '#79EAEE',
        'info-dark': '#6DD2D6',
        secondary: '#E335FF',
        'secondary-light': '#F9D1FF',
        Green: '#69A575',
        'Green-dark': '#4E7B57',
        'Green-light': '#A9C1AE',
        Orange: '#DFC5A7',
        'Orange-dark': '#CFA575',
        'Orange-light': '#F1EDE9',
        Orange: '#EFE5A4',
        'Orange-dark': '#D2C67A',
        'Orange-light': '#FAF4D2',
        Black900: '2d2d2d',
      },
      fontSize: {
        '2xl': '20px',
      },
      letterSpacing:{
        widest: '.15em',
      }

    },
  },
  plugins: [],
}
