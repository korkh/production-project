/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  // The test environment that will be used for testing
  testEnvironment: "jsdom",
  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ["node_modules"],
  // An array of file extensions your modules use
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
  ],
  // The glob patterns Jest uses to detect test files
  testMatch: ["<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"],
  // The root directory that Jest should scan for tests and modules within
  rootDir: "../../",
 
};

export default config;
