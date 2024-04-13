import { Config } from 'jest';
const esModules = ['rxjs', '@angular', '@rx-angular', '@ngx', '@ng-bootstrap', 'ngx', '@ngrx', 'uuid', 'ng2'].join('|');

const config: Config = {
  preset: 'jest-preset-angular',
  modulePathIgnorePatterns: ['<rootDir>/cypress', '__tests__'],
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  moduleNameMapper: {
    '^@domain/(.*)$': '<rootDir>/src/domain/$1',
    '^@adapters/(.*)$': '<rootDir>/src/app/adapters/$1',
    '^@core/(.*)$': '<rootDir>/src/app/core/$1',
    '^@shared/(.*)$': '<rootDir>/src/app/shared/$1',
    '^@views/(.*)$': '<rootDir>/src/app/views/$1',
    '^@env/(.*)$': '<rootDir>/src/environments/$1',
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/**/main.ts'],
};

export default config;
