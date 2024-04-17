module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'no-unused-vars': 'error', 
    'no-tabs': 'error', 
    'indent': ['error', 2], 
    'quotes': ['error', 'single'], 
    'react/prop-types': 'off', 
    'react-hooks/exhaustive-deps': 'warn', 
    'react-hooks/rules-of-hooks': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
