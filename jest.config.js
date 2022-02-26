module.exports = {
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/coverage/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.svg": "<rootDir>/__mocks__/svgrMock.tsx",
  },
  collectCoverage: true,
  coverageReporters: ["text", "cobertura"],
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
};
