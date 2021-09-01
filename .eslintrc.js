module.exports = {
  plugins: ["@typescript-eslint"], // Add
  extends: ["next", "next/core-web-vitals", "plugin:@typescript-eslint/recommended", "prettier/@typescript-eslint"],
  parser: "@typescript-eslint",
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error"
  },
  parserOptions: {
    ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',  // Allows for the use of imports
  },
}

