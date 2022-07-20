const baseConfig = require('../../module-federation.config');

module.exports = {
  ...baseConfig,
  name: 'vocab',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
