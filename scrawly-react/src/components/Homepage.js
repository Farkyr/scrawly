import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";

/* Visuel de la page d'accueil */
class Homepage extends Component {

    handleSubmit(event) {
        event.preventDefault();
        this.props.scrawlyShow(this.props.scrawl.slug);
    }
    render() {
        if (this.props.id) {
            return <Redirect to={"/scrawl/" + this.props.scrawl.slug}/>
        }

        return(
            <div className="homepage bg-blue">
            <h1>Scrawly</h1>
            <form onSubmit={event => this.handleSubmit(event)}>
                <input type="text" placeholder="Scrawl slug" value={this.props.slug} onChange={event => this.props.updateSlug(event.target.value)}/>
                <input type="submit" value="GO!"/>
            </form>
            <Link className="btn" to={"/scrawlnew"}>Create a new Scrawl</Link>
            </div>
        );
    }
    
}

export default Homepage;