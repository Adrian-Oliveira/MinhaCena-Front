const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = () => ({

   mode: 'development',
   devtool: 'cheap-module-source-map',
   devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    port: 8080,
   },
   entry: {
      regenerator: 'regenerator-runtime/runtime',
      main: path.resolve(__dirname, './src/index.js'),
   },
   output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/',
   },
   module: {
    rules: [
      // JavaScript
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      /* {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader']
      },
      {
        test: /\.(jpeg|jpg|ttf|woff|png|wav|ico)$/,
        loader: 'file-loader'
      }, */

      {
        test: /\.(jpe?g|svg|png|gif|ico|eot|ttf|woff2?)(\?v=\d+\.\d+\.\d+)?$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(css|scss)$/,
        use: [ 'style-loader', 'css-loader','sass-loader' ]
      },
    ],
   },
   
   plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Minha Cena',
      template: path.resolve(__dirname, '/src/index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedudantAttributes: true,
      },
    }),
   ]
})
