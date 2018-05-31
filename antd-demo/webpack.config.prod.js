const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
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
    }
});