const webpack = require('webpack');

module.exports = {
    resolve: { extensions: ['*', '.js', '.jsx'] },
    context: process.cwd(),
    node: { __filename: true },
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    externals: [{
        xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
    }]
};