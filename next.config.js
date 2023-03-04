var path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(config.context);
    return config;
  },
};
