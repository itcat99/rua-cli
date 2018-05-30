const path = require('path')

/* 
 * global folders path
 */

export const src = path.resolve(__dirname, 'src')
export const public = path.resolve(__dirname, 'public')
export const scripts = path.resolve(__dirname, 'scripts')

/* src folders path */
export const srcFolders = {
  components: path.join(src, 'components'),
  containers: path.join(src, 'containers'),
  routes: path.join(src, 'routes'),
  reducers: path.join(src, 'reducers'),
  utils: path.join(src, 'utils')
}
/* src files path */
export const srcFiles = {
  entry: path.join(src, 'index.js'),
  router: path.join(src, 'router.js'),
  reducer: path.join(src, 'reducer.js'),
}

export default {
  src,
  public,
  scripts,
  srcFiles,
  srcFolders
}
