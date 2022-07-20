const baseConfig = require('../../module-federation.config');

module.exports = {
  ...baseConfig,
  name: 'conjug8',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
