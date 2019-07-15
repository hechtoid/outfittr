import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import tweets from './tweets_reducer';
import ui from './ui_reducer';

const RootReducer = combineReducers({
  errors,
  session,
  ui,
  tweets
});

export default RootReducer;