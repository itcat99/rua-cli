/* eslint no-console:0 */
const commonConfig = require('../webpack.common');
const path = require('path');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const DashboardPlugin = require('webpack-dashboard/plugin');
const chalk = require('chalk');
const config = require('../config')

const {public} = config

module.exports = ({ port }) => {
  const config = Object.assign({}, commonConfig, {
    mode: 'development',
    devtool: 'source-map',
    plugins: [
      new webpack.NamedModulesPlugin(),
      new DashboardPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],
  });

  const options = {
    contentBase: public,
    hot: true,
    host: 'localhost',
  };

  webpackDevServer.addDevServerEntrypoints(config, options);
  const compiler = webpack(config);
  const server = new webpackDevServer(compiler, options);

  server.listen(port, 'localhost', err => {
    if (err) throw new Error(err);

    console.log(chalk.green(`server is running to http://localhost:${port}`));
  });
};
