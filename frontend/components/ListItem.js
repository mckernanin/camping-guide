import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = ({ className, place, selectLocation }) => (
  <div
    className={className}
    onClick={() => selectLocation(place)}
    role="button"
    tabIndex={0}
  >
    <h1>{place.name}</h1>
    <p>{place.location}</p>
  </div>
);

ListItem.propTypes = {
  place: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
  }).isRequired,
  className: PropTypes.string.isRequired,
  selectLocation: PropTypes.func.isRequired
};

export default styled(ListItem)`
  padding: 10px 0;
  cursor: pointer;
  h1 {
    font-size: 20px;
    color: #111;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    color: #aaa;
  }
`;
