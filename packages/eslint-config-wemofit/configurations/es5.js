'use strict';

module.exports = {
  extends: [
    'wemofit/rules/best-practices',
    'wemofit/rules/errors',
    'wemofit/rules/legacy',
    'wemofit/rules/node',
    'wemofit/rules/strict',
    'wemofit/rules/style',
    'wemofit/rules/variables'
  ],
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: true,
    jasmine: false
  },
  ecmaFeatures: {},
  globals: {},
  rules: {}
};
