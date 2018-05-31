const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
var {
    smart
} = require('webpack-merge')
const base = require('./webpack.config.base.js')

module.exports = smart(base, {
    mode: 'production',
    module: {
        rules: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    'sass-loader',
                ]
            })
        }, ]
    },
    plugins: [
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessorOptions: {
              safe: true,
              autoprefixer: { disable: true }, // 这里是个大坑，稍后会提到
              mergeLonghand: false,
              discardComments: {
                removeAll: true // 移除注释
              }
            },
            canPrint: true
        }),
        new ExtractTextPlugin("bundle.css"),
      ]
});