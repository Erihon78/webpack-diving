import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import Routes from './../Routes';

export default () => (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <link rel="stylesheet" type="text/css" href="/main.css"/>
            </head>
            <body>
                <div id="react-root">${renderToString(
                    <StaticRouter location={req.url} context={{}}>
                        <Routes/>
                    </StaticRouter>
                )}</div>
            </body>            
            <script src="/main-bundle.js" type="text/javascript"></script>
        </html>
    `);
}