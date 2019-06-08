const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = env => {
    return {
        name: 'server',
        entry: {
            server: ['./src/server/main.js']
        },
        mode: 'production',
        output: {
            filename: "[name]-bundle.js",
            path: path.resolve(__dirname, '../build')
        },
        target: 'node',
        externals: nodeExternals(),
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
                                name: 'image/[name]-[hash:8].[ext]'
                            }
                        }
                    ]
                }                
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(env.NODE_ENV)
                }
            }),
            new webpack.NamedModulesPlugin
        ]
    }
}