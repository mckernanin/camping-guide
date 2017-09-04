import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Flex, Box } from 'reflexbox';
import { Text, Card, Button } from 'react-pasta';

import { signupFlow } from '../redux/modules/user';

@connect(({ user }) => ({ user }), { signupFlow })
export default class SignUp extends Component {
  static propTypes = {
    signupFlow: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);

    this.signupSubmit = this.signupSubmit.bind(this);
  }

  signupSubmit(e) {
    e.preventDefault();
    this.props.signupFlow({
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    });
  }

  render() {
    return (
      <Flex align="center" justify="center" py={3}>
        <Box w={320}>
          <Card>
            <Box mb={2}>
              <h1>Sign Up</h1>
            </Box>
            <form onSubmit={this.signupSubmit}>
              <Box mb={2}>
                <Text>Name</Text>
                <input name="name" />
              </Box>
              <Box mb={2}>
                <Text>Email</Text>
                <input type="email" name="email" />
              </Box>
              <Box mb={2}>
                <Text>Password</Text>
                <input type="password" name="password" />
              </Box>
              <Button>Sign Up</Button>
            </form>
          </Card>
        </Box>
      </Flex>
    );
  }
}