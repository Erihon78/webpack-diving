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
                <h1>Make World Greate Again!</h1>
                <img src="/images/index_3.jpg" width="100" height="auto"/>
                <button onClick={this.getClicked.bind(this)}>Click on me – {this.state.count}</button>
                <h3>{'Title'}</h3>
                {/* <mark>{MarkdownData.author}</mark> */}
                <code>
                    <pre dangerouslySetInnerHTML={{__html: 'Html code goes hear'}}></pre>
                </code>
            </div>
        )
    }
}

export default Counter;