import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import tweets from './tweets_reducer';
import ui from './ui_reducer';
import pants from './pants_reducer';
import tops from './tops_reducer';
import outfits from './outfits_reducer'

const RootReducer = combineReducers({
  errors,
  session,
  ui,
  tweets,
  pants,
  outfits,
  tops
});

export default RootReducer;
