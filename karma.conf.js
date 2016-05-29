var path = require('path');

var Paths = {
    rootPath: path.resolve(__dirname),
    appPath: path.resolve(__dirname, 'app'),
    buildPath: path.resolve(__dirname, 'build'),
    appEntry: path.resolve(__dirname, 'test.webpack.js')
};

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'], //run in Chrome
        singleRun: true, //just run once by default
        frameworks: ['jasmine'], //use the jasmine test framework
        files: [
            'test.webpack.js' //just load this file
        ],
        preprocessors: {
            'test.webpack.js': ['webpack'] //preprocess with webpack and our sourcemap loader
        },
        reporters: ['progress', 'coverage'], //report results in this format
        webpack: { //kind of a copy of your webpack config
            devtool: 'inline-source-map', //just do inline source maps instead of the default
            module: {
                loaders: [
                    {
                        test: /\.jsx?$/,
                        loaders: ['babel'],
                        include: Paths.rootPath
                    },
                    {
                        test: /\.scss$/,
                        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
                    }
                ]
            },
            resolve: {
                extensions: ['', '.js', '.jsx']
            }
        },
        //webpackServer: {
        //    noInfo: true //please don't spam the console when running in karma!
        //},
        //plugins: [
        //    require("karma-jasmine"),
        //    require("karma-webpack"),
        //    require("karma-chrome-launcher"),
        //    require("karma-coverage"),
        //    require("karma-sourcemap-loader"),
        //]
    });
};

