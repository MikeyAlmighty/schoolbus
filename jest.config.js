module.exports = {
  "setupFiles": [
    "<rootDir>/.jest/register-context.js"
  ],
  "moduleNameMapper": {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/style-mock.js"
  },
  "transform": {
    "^.+\\.js?$": "babel-jest",
    "^.+\\.md?$": "markdown-loader-jest"
  },
  "transformIgnorePatterns": [
    "/node_modules/(?!@fullfacing/material-icons).+\\.js$"
  ]
}
