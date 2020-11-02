module.exports = {
  roots: ["<rootDir>/tests"],
  testPathIgnorePatterns: ["lib/", "node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  preset: "ts-jest",
  testEnvironment: "node"
};
