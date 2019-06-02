import React, { Component } from 'react';

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
            <button onClick={this.getClicked.bind(this)}>Click on me – {this.state.count}</button>
        )
    }
}

export default Counter;