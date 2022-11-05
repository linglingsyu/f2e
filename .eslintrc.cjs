/* eslint-env node */

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue'],
      },
    },
    'import/core-modules': ['vite', '@vitejs/plugin-vue'],
  },
  rules: {
    'linebreak-style': 0,
    semi: [0],
    'import/prefer-default-export': 'off',
    'no-loss-of-precision': false,
  },
}
