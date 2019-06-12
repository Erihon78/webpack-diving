import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import Routes from './../components/Routes';

import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';

export default ({ clientStats }) => (req, res) => {
    const { js, styles } = flushChunks(clientStats, {
        chunkNames: flushChunkNames()
    });

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>SSR</title>
                ${styles}
            </head>
            <body>
                <div id="react-root">${renderToString(
                    <StaticRouter location={req.originalUrl} context={{}}>
                        <Routes/>
                    </StaticRouter>
                )}</div>
            </body>                                    
           ${js}
        </html>
    `);
}