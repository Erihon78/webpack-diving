import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Counter from './counter';
import Data from './../data/bio';

const render = Component => {
    ReactDOM.hydrate(
        <AppContainer>
            <Component heading={Data.heading} content={Data.bioText}/>
        </AppContainer>,
        document.getElementById('react-root')
    )
}

render(Counter);

if (module.hot) {
    module.hot.accept('./counter', () => {
        const NewCounter = require('./counter').default;
        render(NewCounter);
    })
}