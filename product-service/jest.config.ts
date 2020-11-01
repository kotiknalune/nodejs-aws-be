import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  moduleDirectories: ['node_modules', 'test'],
  moduleNameMapper: {
    'src/resources/products(.*)': '<rootDir>/src/resources/products/$1',
    'src/constants/(.*)': '<rootDir>/src/constants/$1',
  },
  moduleFileExtensions: [
    'js',
    'ts'
  ]
};

export default config;
