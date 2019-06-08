import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Counter from '../counter';

export default () => (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <link rel="stylesheet" type="text/css" href="/main.css"/>
            </head>
            <body>
                <div id="react-root">${ReactDOMServer.renderToString(<Counter />)}</div>
            </body>            
            <script src="/main-bundle.js" type="text/javascript"></script>
        </html>
    `);
}