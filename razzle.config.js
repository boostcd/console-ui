const LoadablePlugin = require('@loadable/webpack-plugin');

// Modifying the default Webpack config provided by razzle
module.exports = {
  modify(config) {
    return {
      ...config,
      plugins: [...config.plugins, new LoadablePlugin()],
    };
  },
};
