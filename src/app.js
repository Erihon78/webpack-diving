import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Links from './components/Links';
import Data from './../data/bio';

const render = Component => {
    ReactDOM.hydrate(
        <AppContainer>
            <Component heading={Data.heading} content={Data.bioText}/>
        </AppContainer>,
        document.getElementById('react-root')
    )
}

render(Links);

if (module.hot) {
    module.hot.accept('./components/Links', () => {
        const NewLinks = require('./components/Links').default;
        render(NewLinks);
    })
}