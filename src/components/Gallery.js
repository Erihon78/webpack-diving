import React, { Component } from 'react';

const getBundle = () => {
    import('lodash').then(_ => {
        console.log('imported', _ )
    })
}

class Gallery extends Component {
    render() {
        return (
            <div>
                <h1 onClick={getBundle} className="heading">Gallery</h1>
            </div>
        )
    }
}

export default Gallery;