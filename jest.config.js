module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  testMatch: ["<rootDir>/src/**/__tests__/**/?(*.)(spec|test).{ts,tsx}"],
  transform: {
    "^.+\\.(jsx?|tsx?)$": "babel-jest"
  },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"]
};
