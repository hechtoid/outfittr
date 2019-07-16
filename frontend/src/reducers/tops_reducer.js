import { RECEIVE_TOPS, RECEIVE_USER_TOPS, RECEIVE_NEW_TOP } from '../actions/top_actions';
  
  const TopsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
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
        newState.new = action.top.data
        return newState;
      default:
        return state;
    }
  };
  
  export default TopsReducer;