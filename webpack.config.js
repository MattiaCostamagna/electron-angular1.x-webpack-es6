const path = require('path');
const DefinePlugin = require('webpack').DefinePlugin;
const MinifyPlugin = require("babel-minify-webpack-plugin");

const commonConfig = {
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }, {
            test: /\.s?css$/,
            exclude: /(node_modules)/,
            loader: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
        }, {
            test: /\.html$/,
            loader: 'raw-loader'
        }, {
            test: /\.(jpe?g|png|gif)$/,
            exclude: /(node_modules)/,
            loader: 'url-loader?limit=10000'
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&minetype=application/font-woff'
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader'
        }]
    },
    plugins: [
        new DefinePlugin({
            TEST: process.env.NODE_ENV === 'test'
        })
    ]
};

let frontend = Object.assign({}, commonConfig, {
        context: path.resolve(__dirname, 'src/frontend'),
        target: 'electron-renderer',
        entry: './renderer.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'renderer.js'
        },
        resolve: {
            extensions: ['.js', '.css', '.html'],
            alias: {
                global: path.resolve(__dirname, 'src/frontend/app/style/global'),
                img: path.resolve(__dirname, 'src/frontend/app/img')
            }
        },
    }),
    backend = Object.assign({}, commonConfig, {
        context: path.resolve(__dirname, 'src/backend'),
        target: 'electron-main',
        entry: './main.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'main.js'
        },
        node: {
            __dirname: false
        }
    });
if (process.env.NODE_ENV === 'production') {
    frontend.plugins.push(new MinifyPlugin());
    backend.plugins.push(new MinifyPlugin());
}

module.exports = [frontend, backend];
