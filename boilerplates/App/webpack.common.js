const path = require('path');
const config = require('./config')

const {srcFiles, public, src} = config

module.exports = {
  entry: srcFiles.entry,
  output: {
    filename: 'index.js',
    path: public,
  },
  module: {
    rules: [{
      test: /\.(js|jsx)?$/,
      include: [src],
      loader: 'babel-loader',
    }, ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
  },
};