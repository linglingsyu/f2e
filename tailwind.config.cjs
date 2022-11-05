module.exports = {
  mode:'jit',
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
        'secondary-light': '#F9D1FF       ',
      },
      fontSize: {
        '2xl': '20px',
      },
    },
  },
  plugins: [],
}
