import { RECEIVE_PANTS, RECEIVE_USER_PANTS, RECEIVE_NEW_PANT } from '../actions/pant_actions';
import merge from 'lodash/merge';

  const PantsReducer = (state = { all: {}, user: {}, new: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_PANTS:
        newState.all = action.Pants.data;
        return newState;
      case RECEIVE_USER_PANTS:
        newState.user = action.pants.data;
        return newState;
      case RECEIVE_NEW_PANT:
        newState = merge({}, state );
        newState.user = [action.pant.data, ...newState.user]
        return newState;
      default:
        return state;
    }
  };
  
  export default PantsReducer;