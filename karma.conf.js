var path = require('path');

var PATHS = {
    rootPath: path.resolve(__dirname),
    appPath: path.resolve(__dirname, 'app'),
    testPath: path.resolve(__dirname, 'test')
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
            'test.webpack.js': ['webpack', 'sourcemap']
        },
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {
                        test: /\.jsx?$/,
                        loader: 'babel',
                        include: [PATHS.appPath, PATHS.testPath]
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
            resolve: {
                extensions: ['', '.js', '.jsx']
            }
        }
    });
};

