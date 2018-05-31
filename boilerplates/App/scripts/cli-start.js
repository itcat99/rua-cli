/* eslint no-console:0 */
const program = require('commander');
const chalk = require('chalk');

program
  .option('-p --port', 'Set the server port number. default:8080')
  .action(async port => {
    if (typeof port !== 'string') {
      port = 8080;
    }

    try {
      require('./start')(port);
    } catch (err) {
      console.log(chalk.red('======= Error Code ======='));
      console.error(err.toString());
      console.log(chalk.red('===== Error Code End ====='));
    }
  });

program.parse(process.argv);

if (!program.port) {
  require('./start')(8080);
}
