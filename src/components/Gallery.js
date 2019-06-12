import React, { Component } from 'react';
import '../css/Gallery.css';

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
                <div className="section-gallery">
                    Some news goes hear
                </div>
            </div>
        )
    }
}

export default Gallery;