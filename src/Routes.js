import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Gallery from './components/Gallery';

const Article = () => {
    return (
        <div>
            <h1>Article</h1>
        </div>
    );
}

class Routes extends Component {
    render() {
        return (
            <div>
                <section>
                    <Link to="/">Gallery</Link>
                    <Link to="/article">Article</Link>
                </section>
                <Route exact path='/' component={Gallery}/>                       
                <Route path='/article' component={Article}/>
            </div>
        )
    }
}

export default Routes;