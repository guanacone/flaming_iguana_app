import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  min-height: 55px;
  z-index: 1;

  .logo {
    font-size: 18px;
    font-family: 'Aleo';
    font-weight: bold;
    }
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <span className='logo'>The Flaming Iguana</span>
      </div>
      <Burger/>
    </Nav>
  );
};

export default Navbar;
