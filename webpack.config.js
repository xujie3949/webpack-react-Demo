var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.BABEL_ENV = process.env.npm_lifecycle_event;

var PATHS = {
    rootPath: path.resolve(__dirname),
    appPath: path.resolve(__dirname, 'app'),
    buildPath: path.resolve(__dirname, 'build'),
    appEntry: path.resolve(__dirname, 'app/index.jsx')
};

module.exports = {
    entry: {
        app: PATHS.appEntry
    },
    output: {
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
        new HtmlWebpackPlugin({
            title: 'My first react app',
            filename: 'index.html'
        })
    ]
}
;
