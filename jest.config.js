// Jest configuration file, see link for more information
// https://thymikee.github.io/jest-preset-angular/docs/

const esModules = ['rxjs', '@angular', '@rx-angular', '@ngx', '@ng-bootstrap', 'ngx', '@ngrx', 'uuid', 'ng2'].join('|');

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  modulePathIgnorePatterns: ['<rootDir>/cypress', '__tests__'],
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  moduleNameMapper: {
    '^@analytics/(.*)$': '<rootDir>/src/analytics/$1',
    '^@domain/(.*)$': '<rootDir>/src/domain/$1',
    '^@adapters/(.*)$': '<rootDir>/src/app/adapters/$1',
    '^@core/(.*)$': '<rootDir>/src/app/core/$1',
    '^@shared/(.*)$': '<rootDir>/src/app/shared/$1',
    '^@views/(.*)$': '<rootDir>/src/app/views/$1',
    '^@env/(.*)$': '<rootDir>/src/environments/$1',
  },
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*.in-memory.repository.ts',
    '!<rootDir>/src/environments/**',
    '!<rootDir>/src/**/*.module.ts',
    '!<rootDir>/src/**/echarts-config.ts',
    '!<rootDir>/src/**/main.ts',
    '!<rootDir>/src/**/polyfills.ts',
  ],
};
