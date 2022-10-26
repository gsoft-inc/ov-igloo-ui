const base = require('../../jest.config');
const { name } = require('./package.json');

module.exports = {
  ...base,
  name,
  displayName: name,
};
