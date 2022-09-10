const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackConfPlugins = [
    new MiniCssExtractPlugin({
        filename: './css/style.css',
    }),
    new HtmlWebpackPlugin({
        title: 'Tanks app',
        filename: './index.html',
        template: './src/index.html'
    }),
];

module.exports = webpackConfPlugins;
