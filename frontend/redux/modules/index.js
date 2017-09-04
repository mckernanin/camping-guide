import { combineReducers } from 'redux';

import location from './location';
import user from './user';

const rootReducer = combineReducers({
  location,
  user
});

export default rootReducer;
