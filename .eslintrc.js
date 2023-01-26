module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    'react-native/react-native': true,
  },
  plugins: ['react', 'react-native'],

  rules: {
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 0,
    'react-native/no-inline-styles': 0,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': 0,

    'react/prop-types': 0,
    'prettier/prettier': 0,
  },
};
