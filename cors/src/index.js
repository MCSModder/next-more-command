module.exports = function myPlugin(
  context,
  options
) {
  return {
    // change this to something unique, or caches may conflict!
    name: "docusaurus-plugin-example",
    configureWebpack(config, isServer, utils, content) {
      return {
        devServer: {
          proxy: {
            "/dev_api": {
              target: 'https://api.steampowered.com',
              pathRewrite: { "^/dev_api": "" },
              changeOrigin: true
            }
          }

        }
      }
    }
  }

}
