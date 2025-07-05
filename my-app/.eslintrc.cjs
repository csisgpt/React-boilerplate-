module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    // Project-specific rule overrides
  },
};
