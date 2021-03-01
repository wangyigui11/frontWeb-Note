var path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'polyfill.js')
  output: {
    path: path.resolve(__dirname,'build')
    filename: '[name].js'
  }
}