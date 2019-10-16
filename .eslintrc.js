module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
  },
  extends: ['react-app', 'plugin:prettier/recommended'],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-wrap-multilines': 0,
    'react/jsx-indent': 0,
    'react/prefer-stateless-function': 1,
    'import/prefer-default-export': 0,
    'react/no-array-index-key': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'dot-notation': 0,
    'consistent-return': 0,
    'no-nested-ternary': 0,
    'no-console': ['error', { allow: ['warn', 'error', 'info', 'trace'] }],
  },
}
