const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackConfModule = {
    rules: [
        {
            test: /\.(s*)css$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        url: false
                    }
                },
                'sass-loader',
            ]
        },
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ],
};

module.exports = webpackConfModule;
