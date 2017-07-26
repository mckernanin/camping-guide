import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Col from 'rfg';
import styled from 'styled-components';

import { fetchLocationsRequest } from '../redux/modules/location';

import ListItem from '../components/ListItem';
import Container from '../components/Container';

const VPadded = styled.div`
  padding: 40px 0;
`;

const Header = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: #111;
  margin-bottom: 20px;
`;

@connect(({ location }) => ({ location }), { fetchLocationsRequest })
export default class App extends Component {
  static propTypes = {
    location: PropTypes.shape({
      locations: PropTypes.array,
      loaded: PropTypes.bool,
      loading: PropTypes.bool
    }).isRequired,
    fetchLocationsRequest: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.fetchLocationsRequest();
  }

  render() {
    const { location: { locations, loaded, loading } } = this.props;
    return (
      <Container>
        <VPadded>
          <Col size={4}>
            {loading && <p>Stuff is loading.</p>}
            {loaded && !locations.length && <p>There was an error loading.</p>}
            {locations &&
              <div>
                <Header>Camp sites near <b>Denver, CO</b></Header>
                {locations.map(place =>
                  <ListItem key={place._id} name={place.name} location={place.location} />)}
              </div>}
          </Col>
          <Col size={8}>
            Some stuff goes here...
          </Col>
        </VPadded>
      </Container>
    );
  }
}
