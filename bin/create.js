const fs = require('fs');
const path = require('path');
const program = require('commander');
const chalk = require('chalk');
const shelljs = require('shelljs');
const execa = require('execa')

const hasDir = (path) => {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err)
        reject(err)

      resolve()
    })
  })
}

program
  .option('<name>', 'please input project name.')
  .option('-d --dir', 'path of project directory, default: "/" ')
  .action(async (targetName, dir) => {
    const name = targetName || 'new-project'
    const folder = dir || process.cwd()

    const finallyPath = path.join(folder, name)
    try {
      await hasDir(finallyPath);

      console.error(chalk.red(`This directory already exists: ${finallyPath}.`))
    } catch (err) {
      try {
      shelljs.mkdir(finallyPath)
      shelljs.cp('-r', path.resolve(__dirname, '..', 'boilerplates', 'App', '*'), finallyPath)

        console.info(chalk.blue('✅ create success!'))
        console.info(chalk.blue(`please \`cd ${finallyPath}\` and \`yarn\``))
        console.info(chalk.green(`please add \`name\` property to \`package.json\``))
      } catch (err) {
        console.error(chalk.red(`Error with replace project name: ${err}`))
      }
    }
  });

program.parse(process.argv);