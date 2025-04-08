export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^ctype/core$': '<rootDir>/src/cljs/ctype/core.cljs'
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testMatch: ['**/*_test.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'cljs']
}; 