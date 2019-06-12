import React, { Component } from 'react';

const getBundle = () => {
    import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
        console.log('imported', _ )
    })
}

class Gallery extends Component {
    render() {
        return (
            <div>
                <h1 onClick={getBundle}>Gallery</h1>
            </div>
        )
    }
}

export default Gallery;