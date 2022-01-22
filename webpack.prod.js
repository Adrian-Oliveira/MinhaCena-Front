const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const loader = require('sass-loader');

module.exports = {

   mode: 'production',
   entry: {
      regenerator: 'regenerator-runtime/runtime',
      main: path.resolve(__dirname, './src/index.js'),
   },
   output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    publicPath: '/',
   },
   module: {
    rules: [
      // JavaScript
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader:'babel-loader',
          options:{
            presets: ['@babel/preset-env']
          }
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader']
      },
      {
        test: /\.(jpeg|jpg|ttf|woff|png|wav|ico)$/,
        loader: 'file-loader',
        /* options: {
          limit: false,  
        }, */
        options: {
          outputPath: 'images',
          name: '[name].[contenthash].[ext]',
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader','sass-loader' ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
    ],
   },
   
   plugins: [
    new MiniCssExtractPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Minha Cena',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedudantAttributes: true,
      },
    }),
   ]
}
