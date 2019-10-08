'use strict'
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: './dist',
        index: './dist/index.html',
        compress: true,
        port: 9000,
        host: 'localhost'
    },
    entry: [
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            name: 'index.html',
            template: './public/index.html'
        }),
    ]
};