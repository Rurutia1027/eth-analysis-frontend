module.exports = {
  preset: "ts-jest", // Using ts-jest for TypeScript support
  testEnvironment: "jest-environment-jsdom", // Using jsdom for browser-like environment
  moduleFileExtensions: ["ts", "tsx", "js", "json"], // Extend to include TypeScript and JavaScript
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Transform TypeScript files with ts-jest
  },
  globals: {
    "ts-jest": {
      isolatedModules: true, // Faster compilation by not type-checking during testing
    },
  },
};
