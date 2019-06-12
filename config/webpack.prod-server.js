const path = require('path');
const webpack = require('webpack');
const externals = require('./node-externals');

module.exports = {
    name: 'server',
    mode: 'production',
    target: 'node',
    externals,
    entry: './src/server/render.js',
    output: {
        filename: "prod-server-bundle.js",
        path: path.resolve(__dirname, '../build'),
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src']
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|gif|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '/images/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: {
                    loader: "css-loader"                   
                }
            },
        ]
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })  
    ]
}