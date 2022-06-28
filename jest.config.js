module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/cypress/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/*.css.js',
    '!**/node_modules/**',
    '!**/tests/**',
    '!**/coverage/**',
    '!./.next/**',
    '!jest.config.js',
    '!next.config.js',
    '!babel.config.js',
    '!.eslintrc.js',
    '!pages/_app.jsx',
    '!**/mocks/**',
    '!./cypress/**',
  ],
  coverageReporters: ['text', 'cobertura', 'html'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'jest-junit',
        outputName: 'junit.xml',
      },
    ],
  ],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\min.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  testEnvironment: 'jsdom',
};
