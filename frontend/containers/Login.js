import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Messages from '../components/Messages';
import Errors from '../components/Errors';

import { loginRequest } from '../redux/modules/login';

class Login extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    loginRequest: PropTypes.func.isRequired,
    login: PropTypes.shape({
      requesting: PropTypes.bool,
      successful: PropTypes.bool,
      messages: PropTypes.array,
      errors: PropTypes.array
    }).isRequired
  };

  submit = (values) => {
    this.props.loginRequest(values);
  };

  render() {
    const { handleSubmit, login: { requesting, successful, messages, errors } } = this.props;

    return (
      <div className="login">
        <form className="widget-form" onSubmit={handleSubmit(this.submit)}>
          <h1>Login</h1>
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="text"
            id="email"
            className="email"
            label="Email"
            component="input"
          />
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
            id="password"
            className="password"
            label="Password"
            component="input"
          />
          <button action="submit">Login</button>
        </form>
        <div className="auth-messages">
          {!requesting &&
            !!errors.length && <Errors message="Failure to login due to:" errors={errors} />}
          {!requesting && !!messages.length && <Messages messages={messages} />}
          {!requesting &&
            successful && (
              <div>
                <Link to="/signup">Need to sign up? Click Here »</Link>
              </div>
            )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login
});

const connected = connect(mapStateToProps, { loginRequest })(Login);

const formed = reduxForm({
  form: 'login'
})(connected);

export default formed;
