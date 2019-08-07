import {
    CLOSE_CONTACT_MODAL,
    OPEN_CONTACT_MODAL,
    CLOSE_USER_MODAL,
    OPEN_USER_MODAL,
    OPEN_ITEM_MODAL,
    CLOSE_ITEM_MODAL,
} from '../actions/ui_actions';

const preloadedState = {
    userModalOpen: false,
    contactUsModalOpen: false,
    itemModal: { open: false, data: null, clothingtype: null},
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
        case CLOSE_ITEM_MODAL:
            return Object.assign({},state, {itemModal: {open: false, data: null, clothingtype: null} });
        case OPEN_ITEM_MODAL:
            return Object.assign({},state, {itemModal: {open: true, data: action.data, clothingtype: action.clothingtype}});
        default:
            return state;
    }
};

export default SessionErrorsReducer;