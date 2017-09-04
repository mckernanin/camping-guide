import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Flex, Box } from 'reflexbox';
import { Text, Input, Card, Button } from 'react-pasta';

import { loginFlow } from '../redux/modules/user';

@connect(({ user }) => ({ user }), { loginFlow })
export default class Login extends Component {
  static propTypes = {
    loginFlow: PropTypes.func.isRequired,
    user: PropTypes.shape({
      error: PropTypes.any
    }).isRequired
  }
  constructor(props) {
    super(props);

    this.loginSubmit = this.loginSubmit.bind(this);
  }

  loginSubmit(e) {
    e.preventDefault();
    this.props.loginFlow({
      email: e.target.email.value,
      password: e.target.password.value
    });
  }

  render() {
    const { error } = this.props.user;
    return (
      <Flex align="center" justify="center" py={3}>
        <Box w={320}>
          <Card>
            <Box mb={2}>
              <h1>Login</h1>
            </Box>
            <form onSubmit={this.loginSubmit}>
              <Box mb={2}>
                <Text>Email</Text>
                <input name="email" />
              </Box>
              <Box mb={2}>
                <Text>Password</Text>
                <input type="password" name="password" />
              </Box>
              <Button>Login</Button>
            </form>
            {error &&
              <Flex pt={2} justify="center">
                <small>{error.message}</small>
              </Flex>
            }
          </Card>
        </Box>
      </Flex>
    );
  }
}