import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  min-height: 55px;
  z-index: 1;

  a {
    text-decoration: none;
  }

  #text-logo {
    font-size: 18px;
    line-height: 26px;
    font-family: 'Aleo';
    font-weight: bold;
    }
`;

const Navbar = () => {
  return (
    <Nav>
      <Link to={'/'}>
        <span id='text-logo'>The Flaming Iguana</span>
      </Link>
      <Burger/>
    </Nav>
  );
};

export default Navbar;
