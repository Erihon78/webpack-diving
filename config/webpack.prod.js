const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const MinifyPlugin = require('babel-minify-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = env => {
    return {
        entry: {
            main: ['./src/main.js']
        },
        mode: 'production',
        output: {
            filename: "[name]-bundle.js",
            path: path.resolve(__dirname, '../dist'),
            publicPath: '/'
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
                    test: /\.css$/,
                    use: [
                        {
                          loader: MiniCssExtractPlugin.loader,
                          options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: './dist',
                            hmr: 'production',
                          },
                        },
                        'css-loader',
                      ],
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
                                name: 'image/[name]-[hash:8].[ext]'
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css',
            }),
            new HTMLWebpackPlugin({
                template: './src/index.html',
                inject: true,
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(env.NODE_ENV)
                }
            }),
            new webpack.NamedModulesPlugin,
            // new MinifyPlugin()
            new UglifyJSPlugin(),
            new CompressionPlugin({
                algorithm: 'gzip'
            }),
            new BrotliPlugin()
        ]
    }
}