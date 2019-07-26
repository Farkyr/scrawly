import {
    UPDATE_SLUG,
    UPDATE_TITLE,
    UPDATE_CHOICES,
    SCRAWLY_SHOW_SUCCESS,
    CHOICES_SHOW_SUCCESS,
    SCRAWLY_CREATE_SUCCESS,
    CHOICES_CREATE_SUCCESS,
    CREATE_SCRAWL_LOADING,
    SCRAWLY_CREATE_ERROR,
} from "../actions/scrawly";
import slugme from "slugme";

const initialState = {
    scrawl: {
        title: "",
        slug: "",
        choices: [],
        person: []
    },
    createScrawlLoading: false
};


function scrawlyApp(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SLUG:
            return {
                ...state,
                scrawl: { ...state.scrawl, slug: slugme(action.payload) }
            };
        case UPDATE_TITLE:
            return {
                ...state,
                scrawl: { ...state.scrawl, title: action.payload, slug: slugme(action.payload) }
            };
        case UPDATE_CHOICES:
            return {
                ...state,
                scrawl: { ...state.scrawl, choices: action.payload }
            };
        case CREATE_SCRAWL_LOADING:
            return {
                ...state,
                createScrawlLoading: true
            };
        case SCRAWLY_SHOW_SUCCESS:
            return {
                ...state,
                scrawl: action.payload
            };
        case CHOICES_SHOW_SUCCESS:
            return {
                ...state,
                choices: action.payload
            };
        case SCRAWLY_CREATE_SUCCESS:
            return {
                ...state,
                scrawl: action.payload,
                createScrawlLoading: false
            };
        case SCRAWLY_CREATE_ERROR:
            return { text: "Scrawl introuvable !", 
                    scrawlLoading: false
            };
        case CHOICES_CREATE_SUCCESS:
            return {
                ...state,
                scrawl: {
                ...state.scrawl,
                choices: [...state.scrawl.choices, action.payload]
                },
        };
        default:
            return state;
    };
}
export default scrawlyApp;