import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
// import Col from 'rfg';
import styled from 'styled-components';

import { fetchLocationsRequest, selectLocation } from '../redux/modules/location';

import ListItem from '../components/ListItem';
import Container from '../components/Container';
import LocationInfo from '../components/LocationInfo';

const VPadded = styled.div`
  padding: 40px 0;
  display: flex;

  @media (max-width: 700px) {
    display: block;
  }
`;

const ColLeft = styled.div`flex: 1;`;

const ColRight = styled.div`
  flex: 3;
  @media (min-width: 701px) {
    margin-left: 1em;
  }
`;

const Header = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: #111;
  margin-bottom: 20px;
`;

@connect(({ location }) => ({ location }), { fetchLocationsRequest, selectLocation })
export default class App extends Component {
  static propTypes = {
    location: PropTypes.shape({
      locations: PropTypes.array,
      loaded: PropTypes.bool,
      loading: PropTypes.bool
    }).isRequired,
    fetchLocationsRequest: PropTypes.func.isRequired,
    selectLocation: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.fetchLocationsRequest();
  }

  render() {
    const { location: { locations, selectedLocation, loaded, loading } } = this.props;
    return (
      <Container>
        <VPadded>
          <ColLeft>
            {loading && <p>Stuff is loading.</p>}
            {loaded && !locations.length && <p>There was an error loading.</p>}
            {locations && (
              <div>
                <Header>
                  Campsites near <b>Denver, CO</b>
                </Header>
                {locations.map(place => (
                  <ListItem
                    key={place._id}
                    place={place}
                    selectLocation={this.props.selectLocation}
                  />
                ))}
              </div>
            )}
          </ColLeft>
          <ColRight>
            {selectedLocation && <LocationInfo place={selectedLocation} />}
            {!selectedLocation && <p>Select a location to view more info.</p>}
          </ColRight>
        </VPadded>
      </Container>
    );
  }
}
