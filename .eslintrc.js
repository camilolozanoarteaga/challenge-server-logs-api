module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: ['airbnb-base', 'plugin:jest/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    /* Indentación a 2 espacios: https://eslint.org/docs/rules/indent */
    indent: ['error', 2],
    /* Finales de línea de UNIX: https://eslint.org/docs/rules/linebreak-style */
    'linebreak-style': ['error', 'unix'],
    /* Uso de comillas simples para strings: https://eslint.org/docs/rules/quotes */
    quotes: ['error', 'single'],
    /* Uso de punto y coma obligatorio: https://eslint.org/docs/rules/semi */
    semi: ['error', 'always'],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
};
