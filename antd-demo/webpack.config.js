const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var WebpackMerge = require('webpack-merge')
const base = require('./webpack.config.base.js')

module.exports = WebpackMerge(base, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    inline: true,
    progress: true,
  },
  plugins: [
    new OpenBrowserPlugin({
      url: 'http://localhost:8080/'
    }),
  ]
});