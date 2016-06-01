var path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

process.env.BABEL_ENV = process.env.npm_lifecycle_event;

var PATHS = {
    rootPath: path.resolve(__dirname),
    appPath: path.resolve(__dirname, 'app'),
    buildPath: path.resolve(__dirname, 'build'),
    coveragePath: path.resolve(__dirname, 'coverage'),
    nodeModulesPath: path.resolve(__dirname, 'node_modules'),
    appEntry: path.resolve(__dirname, 'app/index.jsx')
};

var config = {
    entry: {
        app: PATHS.appEntry
    },
    output: {
        path: PATHS.buildPath,
        filename: '[name].[hash].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: PATHS.appPath
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            }
        ]
    },
    plugins: [
        new CleanPlugin([PATHS.buildPath, PATHS.coveragePath]),
        new HtmlWebpackPlugin({
            title: 'My first react app',
            filename: 'index.html'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]
};

module.exports = config;
