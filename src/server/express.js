import express from 'express';
import path from 'path';

const server = express();

const webpack = require('webpack');
const config = require('../../config/webpack.dev.js');
const compiler = webpack(config);

const webpackDevMiddleware =
    require('webpack-dev-middleware')(
        compiler,
        config.devServer
    )

const webpackHotMiddleware = require('webpack-hot-middleware')(compiler)

server.use(webpackDevMiddleware)

server.use(webpackHotMiddleware)

const staticMiddleware = express.static('dist', {
    enableBrotli: true
})

server.use(staticMiddleware);

const expressStaticGzip = require('express-static-gzip');
server.use(expressStaticGzip('dist'));

const PORT = 8080;

server.listen(PORT, () => {
    console.log(`Server is listening on http://127.0.0.1:${PORT}`);
})
