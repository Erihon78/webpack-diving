import React, { Component } from 'react';
// import MarkdownData from '../data/post.md';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }
    getClicked() {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
               <h1>One</h1>
            </div>
        )
    }
}

export default Counter;