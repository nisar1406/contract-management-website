module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module',
    allowImportExportEverywhere: false
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/jsx-props-no-spreading': [0],
    'react/function-component-definition': [
      0,
      {
        namedComponents: 'function-declaration' | 'function-expression' | 'arrow-function',
        unnamedComponents: 'function-expression' | 'arrow-function'
      }
    ]
  }
};
