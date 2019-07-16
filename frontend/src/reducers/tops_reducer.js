import { RECEIVE_TOPS, RECEIVE_USER_TOPS, RECEIVE_NEW_TOP } from '../actions/top_actions';
import merge from 'lodash/merge';

  const TopsReducer = (state = { all: {}, user: {}, new: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_TOPS:
        newState.all = action.tops.data;
        return newState;
      case RECEIVE_USER_TOPS:
        newState.user = action.tops.data;
        return newState;
      case RECEIVE_NEW_TOP:
        newState = merge({}, state);
        newState.user = [action.top.data, ...newState.user]
        return newState;
      default:
        return state;
    }
  };
  
  export default TopsReducer;