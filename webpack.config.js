var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var Paths = {
    rootPath: path.resolve(__dirname),
    appPath: path.resolve(__dirname, 'app'),
    buildPath: path.resolve(__dirname, 'build'),
    appEntry: path.resolve(__dirname, 'app/index.jsx')
};

module.exports = {
    entry: {
        app: Paths.appEntry
    },
    output: {
        path: Paths.buildPath,
        filename: '[name].[hash].js'
    },
    //enable dev source map
    devtool: 'eval-source-map',
    //enable dev server
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: Paths.appPath
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My first react app',
            filename: 'index.html'
        })
    ]
};
