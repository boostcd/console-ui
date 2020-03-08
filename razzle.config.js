const path = require('path');
const LoadableWebpackPlugin = require('@loadable/webpack-plugin');

// Modifying the default Webpack config provided by razzle
// https://github.com/gregberge/loadable-components/tree/master/examples/razzle
module.exports = {
  modify: (config, { dev, target }) => {
    const appConfig = Object.assign({}, config);

    if (target === 'web') {
      const filename = path.resolve(__dirname, 'build');

      appConfig.plugins = [
        ...appConfig.plugins,
        new LoadableWebpackPlugin({
          outputAsset: false,
          writeToDisk: { filename },
        }),
      ];

      appConfig.output.filename = dev ? 'static/js/[name].js' : 'static/js/[name].[chunkhash:8].js';

      appConfig.optimization = Object.assign({}, appConfig.optimization, {
        runtimeChunk: true,
        splitChunks: {
          chunks: 'all',
          name: dev,
        },
      });
    }

    return appConfig;
  },
};
