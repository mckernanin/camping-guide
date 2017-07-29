import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LocationInfo = ({ className, place }) => (
  <div className={className}>
    <h1>{place.name}</h1>
    <h3>{place.location}</h3>
    <p>{place.desc}</p>
  </div>
);

LocationInfo.propTypes = {
  className: PropTypes.string.isRequired,
  place: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
  }).isRequired
};

export default styled(LocationInfo)`
  h1 {
    font-size: 3rem;
    color: #111;
    margin-bottom: 10px;
  }
  p {
    font-size: 1rem;
    color: #aaa;
  }
`;
