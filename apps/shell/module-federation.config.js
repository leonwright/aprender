const baseConfig = require('../../module-federation.config');

module.exports = {
  ...baseConfig,
  name: 'shell',
  remotes: ['conjug8', 'vocab'],
};
