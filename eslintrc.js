module.exports = {
    root: true,
    parserOptions: {
      ecmaVersion: 2021,  // Можно поднять до 2022 или 2023
      sourceType: 'module'
    },
    env: {
      node: true,  // Включаем окружение для Node.js
      es2021: true
    },
    extends: ['eslint:recommended'],
    rules: {
      'prefer-promise-reject-errors': 'off',
      'space-before-function-paren': ['error', 'always'],
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'comma-dangle': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never']
    }
  }
  