const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    devtool: false,
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        })
    ],
}
