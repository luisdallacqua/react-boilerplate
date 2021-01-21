module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
  // transformIgnorePatterns: [
  //   '/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.js$',
  //   '/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.ts$',
  //   '/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.tsx$'
  // ]
}

// transformIgnorePatterns para parar o problema com os testes
