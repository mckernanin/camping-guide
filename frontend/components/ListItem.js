import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ name, location }) => (
  <div>
    <h1>{name}</h1>
    <p>{location}</p>
  </div>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

export default ListItem;
