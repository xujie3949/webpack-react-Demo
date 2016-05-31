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

var deps = [
    {
        name: 'react',
        path: 'react/dist/react.min.js'
    },
    {
        name: 'react-dom',
        path: 'react-dom/dist/react-dom.min.js'
    }
];

var config = {
    entry: {
        app: PATHS.appEntry
    },
    output: {
        path: PATHS.buildPath,
        filename: '[name].[hash].js'
    },
    resolve: {
        alias: {},
        extensions: ['', '.js', '.jsx']
    },
    module: {
        noParse: [],
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: PATHS.appPath
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
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
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};

deps.forEach(function (dep) {
    var depPath = path.resolve(PATHS.nodeModulesPath, dep.path);
    config.resolve.alias[dep.name] = depPath;
    config.module.noParse.push(depPath);
});

module.exports = config;
