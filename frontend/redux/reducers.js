import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import location from './modules/location';
import client from './modules/client';
import signup from './modules/signup';
import login from './modules/login';

export default combineReducers({
  routing: routerReducer,
  form,
  location,
  client,
  signup,
  login
});
