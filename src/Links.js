import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Routes from './Routes';
// import { createBrowserHistory } from 'history';

// const history = createBrowserHistory();

class Links extends Component {
    render() {
        return (
            <Router>
                <Routes/>
            </Router>
        )
    }
}

export default Links;