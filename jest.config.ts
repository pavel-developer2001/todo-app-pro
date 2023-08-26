export default {
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
  moduleDirectories: ["node_modules", "src"],
  testMatch: ["<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"],
  roots: ["src"],
  clearMocks: true,
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.s?css$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  globals: {
    SERVER_API: "",
  },
}
