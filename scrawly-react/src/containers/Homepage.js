import { connect } from "react-redux";
import { updateSlug, scrawlyShow } from "../actions/scrawly";
import Homepage from "../components/Homepage";
// import du composant

// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        scrawl: state.scrawly.scrawl,
        id: state.scrawly.scrawl["@id"]
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    updateSlug: slug => dispatch(updateSlug(slug)),
    scrawlyShow: slug => dispatch(scrawlyShow(slug))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Homepage)