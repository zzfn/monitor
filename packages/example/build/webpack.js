const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");


module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        clean: true,
        path: path.resolve(__dirname, '../dist'),
        filename: 'static/js/[contenthash:8].chunk.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx|js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
        })
    ].filter(Boolean),
}