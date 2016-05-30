var path = require('path');

var PATHS = {
    rootPath: path.resolve(__dirname)
};

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['jasmine'],
        files: [
            'test/*.jsx'
        ],
        preprocessors: {
            'test/*.jsx': ['webpack']
        },
        reporters: ['progress', 'coverage'],
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {
                        test: /\.jsx?$/,
                        loaders: ['babel'],
                        include: PATHS.rootPath
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
        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        },
        plugins: [
            require("karma-jasmine"),
            require("karma-webpack"),
            require("karma-chrome-launcher"),
            require("karma-coverage"),
            require("karma-sourcemap-loader"),
        ]
    });
};

