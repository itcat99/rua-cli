/* eslint no-console:0 */
const serve = require('webpack-serve');
const config = require('../webpack.dev');
const chalk = require('chalk');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');
const webpackServeWaitpage = require('webpack-serve-waitpage');

module.exports = port => {
  serve({
    config,
    add: (app, middleware, options) => {
      app.use(
        webpackServeWaitpage(options, {
          title: 'waiting for compilation...',
          theme: 'dark',
        }),
      );

      app.use(
        convert(
          history({
            verbose: true,
            logger: console.log.bind(console),
          }),
        ),
      );
    },
    content: config.output.path,
    clipboard: true,
    hot: true,
    port,
  }).then(server => {
    let port;
    server.on('listening', app => {
      port = app.options.port;
    });

    server.on('build-finished', () => {
      setTimeout(() => {
        console.log();
        console.log(`=========== ✅  build finished!!! ===========`);
        console.log();
        console.log(
          chalk.green(
            `server is running to http://localhost:${port} and copied!!! `,
          ),
        );
        console.log();
        console.log(`=============================================`);
      }, 800);
    });
  });
};
