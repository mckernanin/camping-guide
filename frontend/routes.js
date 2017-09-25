import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './containers/App';

import Login from './containers/Login';
import SignUp from './containers/SignUp';

import Account from './containers/Account';
import NewCampsite from './containers/NewCampsite';

// import Authorized from './containers/Authorized';

import NavBar from './components/Navbar';

export default (
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/new" component={NewCampsite} />
      <Route path="/account" component={Account} />
    </div>
  </Router>
);
