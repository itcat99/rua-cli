const config = require('./config');
const { srcFiles, publicPath, src } = config;

module.exports = {
  entry: srcFiles.entry,
  output: {
    filename: 'index.js',
    path: publicPath,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        include: [src],
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
  },
};
