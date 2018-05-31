const path = require('path');

/* 
 * global folders path
 */

const src = path.resolve(__dirname, 'src');
const publicPath = path.resolve(__dirname, 'public');
const scripts = path.resolve(__dirname, 'scripts');

/* src folders path */
const srcFolders = {
  components: path.join(src, 'components'),
  containers: path.join(src, 'containers'),
  routes: path.join(src, 'routes'),
  reducers: path.join(src, 'reducers'),
  utils: path.join(src, 'utils'),
};
/* src files path */
const srcFiles = {
  entry: path.join(src, 'index.js'),
  router: path.join(src, 'router.js'),
  reducer: path.join(src, 'reducer.js'),
};

module.exports = {
  src,
  publicPath,
  scripts,
  srcFiles,
  srcFolders,
};
