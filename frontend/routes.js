import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import App from './containers/App';
import NewCampsite from './containers/NewCampsite';
import Login from './containers/Login';

import NavBar from './components/Navbar';

export default (
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={App} />
      <Route path="/new" component={NewCampsite} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
);
