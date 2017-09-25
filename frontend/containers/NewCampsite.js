import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Container from '../components/Container';

import { createLocation } from '../redux/modules/location';

@connect(({ location }) => ({ location }), { createLocation })
export default class NewCampsite extends Component {
  static propTypes = {
    location: PropTypes.shape({
      locations: PropTypes.array,
      loaded: PropTypes.bool,
      loading: PropTypes.bool
    }).isRequired,
    createLocation: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.saveLocation = this.saveLocation.bind(this);
  }

  saveLocation(e) {
    e.preventDefault();
    this.props.createLocation({
      name: e.target.name.value,
      desc: e.target.desc.value,
      location: e.target.location.value
    });
  }

  render() {
    return (
      <Container>
        <h1>New Campsite</h1>
      </Container>
    );
  }
}
