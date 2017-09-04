import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import App from './containers/App';

import Login from './containers/Login';
import SignUp from './containers/SignUp';

import Account from './containers/Account';
import NewCampsite from './containers/NewCampsite';

import Authorized from './containers/Authorized';

import NavBar from './components/Navbar';

export default (
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Authorized path="/new" component={NewCampsite} />
      <Authorized path="/account" component={Account} />
    </div>
  </Router>
);
