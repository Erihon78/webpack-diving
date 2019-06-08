import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Counter from '../counter';

export default () => (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">          
            <body>
                <div id="react-root">${ReactDOMServer.renderToString(<Counter />)}</div>
            </body>            
            <script src="/main-bundle.js" type="text/javascript"></script>
        </html>
    `);
}