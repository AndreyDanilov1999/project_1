const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'index.js'),
    plugins: [
        new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'template.html'),
        filename: 'index.html',
        }),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.[contenthash:10].js',
      },
    devServer: {
       watchFiles: path.join(__dirname, 'src'),
       port: 9000,
       hot: true,
    },
    stats: {
        children: false,
        entrypoints: true,
    },
};