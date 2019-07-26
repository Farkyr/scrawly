import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class ScrawlNew extends Component {
    handleSubmit(event) {
        event.preventDefault();
        if (!this.props.loading) {
        this.props.scrawlyCreate({
            title: this.props.scrawl.title,
            slug: this.props.scrawl.title,
        });
    };
    }
    render() {
        if (this.props.id) {
            return <Redirect to={"/scrawledit/" + this.props.scrawl.slug} />
        }
        return (
            <React.Fragment>
                <h2 className="container-title">Créer votre Scrawly</h2>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <div>
                        <label htmlFor="title">Titre</label>
                        <input type="text" id="title" value={this.props.scrawl.title} placeholder="Scrawl Title" onChange={event => this.props.updateTitle(event.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="slug">Slug</label>
                        <input type="text" id="slug" value={this.props.scrawl.slug} placeholder="Scrawl Title" onChange={event => this.props.updateSlug(event.target.value)} />
                    </div>
                    <button type="submit" className="btn-add">
                    <i className={"fa " + (this.props.loading ? "fa-spinner fa-pulse" : "fa-arrow-right") + " ..."}/>
                        Créer un nouveau Scrawly
                    </button>
                </form>
                </React.Fragment>
        );
    }
}
export default ScrawlNew;