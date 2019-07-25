import React, { Component } from 'react';

class ScrawlEdit extends Component {
    handleSubmit(event) {
        event.preventDefault();
        this.props.choicesCreate({
            date: this.props.scrawl.choices,
            poll: this.props.scrawl["@id"],
        }
        );
    }
    render() {
        return (
                <section class="container form-new">
                    <h2>{this.props.scrawl.title}</h2>
                    <ul>
                        <li>
                            {this.props.scrawl.choices}
                        </li>
                    </ul>
                    <form onSubmit={event => this.handleSubmit(event)}>
                    <input type="date" placeholder="Scrawl Date" value={this.props.scrawl.choices} onChange={event => this.props.updateChoices(event.target.value)}/>
                        <button type="submit" class="button button-primary">
                            <i class="fa fa-plus"></i>
                            Add
                        </button>
                    </form>
                    <a href="scrawl.html" class="button button-primary">
                        <i class="fa fa-check"></i>
                        Finish
                    </a>
                </section>
        );
    }
}

export default ScrawlEdit;