import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = ({ className, name, location }) => (
  <div className={className}>
    <h1>{name}</h1>
    <p>{location}</p>
  </div>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default styled(ListItem)`
  padding: 10px 0;
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
