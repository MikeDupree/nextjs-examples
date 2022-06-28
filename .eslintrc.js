module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  extends: [
    'next',
    'plugin:prettier/recommended',
    'plugin:jest-dom/recommended',
    'plugin:cypress/recommended',
  ],
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    },
  ],
  plugins: ['prettier', 'jest', 'testing-library', 'jest-dom'],
  rules: {
    'no-param-reassign': ['error', { props: false }],
    'no-restricted-syntax': 'off',
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.test.jsx',
          '**/*.spec.jsx',
          '**/setupTests.js',
          '**/*.test.ts',
          '**/*.test.tsx',
          'cypress/**',
        ],
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.test.js', '.jsx', '.tsx'],
      },
    ],
    'testing-library/await-async-query': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-debug': 'warn',
    'testing-library/no-dom-import': 'off',
    'jest-dom/prefer-checked': 'error',
    'jest-dom/prefer-enabled-disabled': 'error',
    'jest-dom/prefer-required': 'error',
    'jest-dom/prefer-to-have-attribute': 'error',
  },
};
