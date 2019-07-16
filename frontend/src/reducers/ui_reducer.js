import {
    CLOSE_CONTACT_MODAL,
    OPEN_CONTACT_MODAL,
    CLOSE_USER_MODAL,
    OPEN_USER_MODAL,
} from '../actions/ui_actions';

const preloadedState = {
    userModalOpen: false,
    contactUsModalOpen: false,
};

const SessionErrorsReducer = (state = preloadedState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case CLOSE_CONTACT_MODAL:
            return Object.assign({},state, {contactUsModalOpen: false});
        case OPEN_CONTACT_MODAL:
            return Object.assign({},state, {contactUsModalOpen: true});
        case CLOSE_USER_MODAL:
            return Object.assign({},state, {userModalOpen: false});
        case OPEN_USER_MODAL:
            return Object.assign({},state, {userModalOpen: true});
        default:
            return state;
    }
};

export default SessionErrorsReducer;