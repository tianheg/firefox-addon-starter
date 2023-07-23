module.exports = {
  "env": {
    "webextensions": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:mozilla/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "mozilla"
  ],
  "root": true,
  "rules": {
    "eqeqeq": "error",
    "space-before-function-paren": "off",
    "no-console": ["error", {"allow": ["error", "info", "trace", "warn"]}]
  }
};
