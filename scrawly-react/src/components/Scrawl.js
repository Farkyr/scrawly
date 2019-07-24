import React, { Component } from 'react';

class Scrawl extends Component {
    render() {
        return (
            <React.Fragment>
            <div>
                <h1>{this.props.scrawl.title}</h1>
            </div>
            </React.Fragment>
        );
    }
}

export default Scrawl;