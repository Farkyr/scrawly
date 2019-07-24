import { connect } from "react-redux";
import { updateChoices } from "../actions/scrawly";
import ScrawlEdit from "../components/ScrawlEdit";

// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        scrawl: state.scrawly.scrawl,
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    updateChoices: choices=> dispatch(updateChoices(choices)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScrawlEdit)