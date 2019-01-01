// https://github.com/thymikee/jest-preset-angular#brief-explanation-of-config
module.exports = {
  "notify": true,
  "restoreMocks": true,
  cacheDirectory: './.jest-cache',
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov'],
  globals: {
    "ts-jest": {
      'babelConfig': false,
      'tsConfig': '<rootDir>/server/tsconfig.server.json',
    }
  },
  moduleFileExtensions: ['js', 'ts'],
  modulePaths: ['<rootDir>/server/'],
  roots: ['server'],
  setupTestFrameworkScriptFile: '<rootDir>/server/spec-helper.js',
  testEnvironment: 'node',
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)'],
  testURL: 'http://localstorage:8080',
  transform: {
    '^.+\\.(ts|js)x?$': 'ts-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!(jest-test))'],
};
