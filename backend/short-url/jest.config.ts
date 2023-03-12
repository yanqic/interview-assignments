import type { Config } from 'jest';

const config: Config = {
    testEnvironment: 'node',
    coverageDirectory: './coverage',
    collectCoverageFrom: [
        'src/**/*.{js,ts}',
        '!src/app.{js,ts}',
        '!src/index.{js,ts}',
        '!src/config/*.{js,ts}',
        '!src/entities/index.{js,ts}',
        '!src/utils/logger.ts'
    ],
    coverageThreshold: {
        global: {
            statements: 90,
            branches: 85,
            functions: 90,
            lines: 90
        }
    },
    modulePaths: ['.'],
    moduleNameMapper: {
        '@config': 'src/config',
        '@utils/(.*)$': '<rootDir>/src/utils/$1',
        '@controllers/(.*)$': 'src/controllers/$1',
        '@routes/(.*)$': 'routes/$1',
        '@controllers/*': 'controllers/$1',
        '@middlewares/(.*)$': 'middlewares/$1',
        '@interfaces/(.*)$': 'interfaces/$1',
        '@dtos/(.*)$': 'dtos/$1',
        '@entities/(.*)$': 'entities/$1',
        '@services/(.*)$': 'services/$1',
        '@exceptions/(.*)$': 'exceptions/$1'
    },
    moduleDirectories: ['node_modules', 'src'],
    modulePathIgnorePatterns: ['src/config'],
    testMatch: ['**/?(*.)+(spec|test).[jt]s'],
    transformIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist'],
    preset: 'ts-jest',
    transform: { '^.+\\.ts?$': 'ts-jest' },
    moduleFileExtensions: ['js', 'ts']
};

export default config;
