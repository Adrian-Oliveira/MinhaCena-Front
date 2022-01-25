const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.dev.js')

module.exports = merge(common(), {
  mode: 'production',
  devtool: false,
  // optimization: {},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: './',
  }
})
