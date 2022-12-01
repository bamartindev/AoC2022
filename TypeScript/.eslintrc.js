module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    soureType: "module",
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    "no-var": "error"
  }
}