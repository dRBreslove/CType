export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.test.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^ctype/core$': '<rootDir>/src/ts/__mocks__/ctype/core.ts'
  },
  collectCoverageFrom: [
    'src/ts/**/*.ts',
    '!src/ts/**/*.d.ts',
    '!src/ts/**/__mocks__/**'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  verbose: true
}; 