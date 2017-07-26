import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { fetchLocationsRequest } from '../redux/modules/location';

import ListItem from '../components/ListItem';

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
      <div>
        {loading && <p>Stuff is loading.</p>}
        {loaded && !locations.length && <p>There was an error loading.</p>}
        {locations &&
          locations.map(place =>
            <ListItem key={place._id} name={place.name} location={place.location} />)}
      </div>
    );
  }
}
