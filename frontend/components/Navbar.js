import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from './Container';

const NavbarStyled = styled.div`
  width: 100%;
  height: 80px;
  background-color: #c1363f;
  color: #fff;

  h3 a {
    text-decoration: none;
    color: white;
  }
`;

const FlexRow = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FlexGrow = styled.div`flex-grow: 1;`;

const NavLink = styled.a`
  color: #fff;
  font-weight: bold;
  text-decoration: none;
`;

const NavBar = ({ user }) => (
  <NavbarStyled>
    <Container>
      <FlexRow>
        <h3>
          <Link to="/">Camping Guide</Link>
        </h3>
        <FlexGrow />
        {!user && <NavLink href="/login">Login</NavLink>}
        {user && <NavLink>Logout</NavLink>}
      </FlexRow>
    </Container>
  </NavbarStyled>
);

NavBar.propTypes = {
  user: PropTypes.object
};

NavBar.defaultProps = {
  user: null
};

export default NavBar;
