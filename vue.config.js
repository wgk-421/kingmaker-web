'use strict'
const port = process.env.port || process.env.npm_config_port || 8888 // dev port
module.exports = {
  publicPath: '/',
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    port: port,
    // open: true,
    overlay: {
      warnings: false,
      errors: false
    },
    before: require('./mock/mock-server.js')
  }
}
