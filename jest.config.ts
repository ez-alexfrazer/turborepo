import type { Config } from '@jest/types';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default createJestConfig(customJestConfig);