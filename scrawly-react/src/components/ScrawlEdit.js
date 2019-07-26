import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './ScrawlEdit.scss'

class ScrawlEdit extends Component {

    componentDidMount() {
        const slug = /[^/]*$/.exec(this.props.location.pathname)[0];
        this.props.search(slug);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.choicesCreate({
            date: this.props.scrawl.choices,
            poll: this.props.scrawl["@id"],
        }
        );
    }

    render() {
        if (["hydra:member"].length > 0) {
        console.log(this.props.scrawl.choices)
        const {choices} = this.props.scrawl;
        const choicesList = choices.map((key) => <li key={key['@id']}>{key.date}</li>
        );
        
        
        return (
            <React.Fragment>
            <h2 className="container-title">{this.props.scrawl.title}</h2>
            <section className="container form-new">
                <p>Vous êtes en train de modifier le scrawly : {this.props.match.params.slug}  </p>
                <ul>
                    {choicesList}
                </ul>
                <input type="date" placeholder="Scrawl Date" value={""} onChange={event => this.props.updateChoices(event.target.value)} />
                <form onSubmit={event => this.handleSubmit(event)}>
                    <button type="submit" className="btn-add"><i className="fa fa-plus"></i> Ajouter</button>
                </form>
                <NavLink className="btn" to={"/scrawl/" + this.props.scrawl.slug}><i className="fa fa-check"></i>Sauvegarder</NavLink>
                
            </section>
            </React.Fragment>
        );
        }
    }
}

export default ScrawlEdit;