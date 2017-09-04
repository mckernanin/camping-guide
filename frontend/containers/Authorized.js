import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { validateToken } from '../redux/modules/user';

@connect(({ user }) => ({ user }), { validateToken })
export default class Authorized extends Component {
  static propTypes = {
    validateToken: PropTypes.func.isRequired,
    user: PropTypes.shape({
      user: PropTypes.object,
      token: PropTypes.string
    }).isRequired,
    component: PropTypes.any.isRequired
  }
  componentWillMount() {
    this.props.validateToken();
  }
  render() {
    const { user } = this.props;
    const { component } = this.props;
    if (user && user.error && user.error.message) {
      return <Redirect to="/login" />;
    }
    if ((user && user.user && user.user._id) && (user.token)) {
      return <Route {...this.props} component={component} />;
    }
    return <Route {...this.props} component={() => <p>Loading</p>} />;
  }
}
