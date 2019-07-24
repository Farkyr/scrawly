import { connect } from "react-redux";
import {  } from "../actions/scrawly";
import ScrawlEdit from "../components/ScrawlEdit";

// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        scrawl: state.scrawly.scrawl
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScrawlEdit)