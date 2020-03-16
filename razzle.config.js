const path = require('path');
const LoadableWebpackPlugin = require('@loadable/webpack-plugin');
const webpack = require('webpack');

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

    // Define the global environment variables used in the project
    appConfig.plugins.push(
      new webpack.DefinePlugin({
        PRODUCT: JSON.stringify(process.env.PRODUCT),
        PRODUCT_DESCRIPTION: JSON.stringify(process.env.PRODUCT_DESCRIPTION),
        GATEWAY_API_SERVICE_URI: JSON.stringify(process.env.GATEWAY_API_SERVICE_URI),
        TASK_MANAGEMENT_TITLE: JSON.stringify(process.env.TASK_MANAGEMENT_TITLE),
      })
    );

    return appConfig;
  },
};
