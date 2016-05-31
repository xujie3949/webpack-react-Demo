var path = require('path');

var PATHS = {
    rootPath: path.resolve(__dirname),
    appPath: path.resolve(__dirname, 'app/components')
};

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['jasmine'],
        files: [
            'test.webpack.js'
        ],
        preprocessors: {
            'test.webpack.js': ['webpack'],
            'app/components/*.jsx': ['coverage']
        },
        reporters: ['progress'],
        coverageReporter: {
            reporters: [
                {type: 'html', subdir: 'html'},
                {type: 'lcovonly', subdir: '.'}
            ]
        },
        webpack: {
            devtool: 'inline-source-map',
            module: {
                preLoader: [
                    {
                        test: /\.jsx?$/,
                        loader: 'babel',
                        exclude: /(bower_components|node_modules)/,
                        include: PATHS.appPath
                    },
                    {
                        test: /\.jsx?$/,
                        loader: 'babel-istanbul',
                        exclude: /(bower_components|node_modules)/,
                        include: PATHS.appPath
                    }
                ],
                loaders: [
                    {
                        test: /\.jsx?$/,
                        loaders: ['babel'],
                        include: PATHS.rootPath
                    }
                ]
            },
            resolve: {
                extensions: ['', '.js', '.jsx']
            }
        }
    });
};

