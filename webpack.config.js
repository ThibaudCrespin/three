const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const plugins = [new HtmlWebPackPlugin({template: './src/index.html'})];
if (process.env.NODE_ENV === 'production') plugins.push(new UglifyJsPlugin());

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: plugins,
    devServer: {
        host: '0.0.0.0',
        port: 9000
    }
};