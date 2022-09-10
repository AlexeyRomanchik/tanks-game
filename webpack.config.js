const path = require("path");
const webpackConfModule = require("./webpack/module");
const webpackConfPlugins = require("./webpack/plugins");

module.exports = {
    mode: "development",
    watch: true,
    devtool: "source-map",

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    entry: "./src/js/index.ts",

    output: {
        filename: "./js/index.js",
        path: path.resolve(__dirname, "dist"),
    },

    module: webpackConfModule,
    plugins: webpackConfPlugins,
};
