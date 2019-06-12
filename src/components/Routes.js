import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import universal from 'react-universal-component';

const UniversalComponent = universal(props => import (`./${props.page}`));

class Routes extends Component {
    render() {
        return (
            <div>
                <section>
                    <Link to="/">Gallery</Link>
                    <Link to="/article">Article</Link>
                </section>
                <Switch>
                    <Route exact path='/'>
                        <UniversalComponent page="Gallery"/>
                    </Route>                       
                    <Route exact path='/article'>
                        <UniversalComponent page="Article"/>
                    </Route>
                </Switch>   
            </div>
        )
    }
}

export default Routes;