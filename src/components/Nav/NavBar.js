import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  min-height: 55px;
  z-index: 1;

  .logo {
    font-size: 3vw;
    font-family: 'Aleo';
    font-weight: bold;
    }
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <span className='logo'>THE FLAMING IGUANA</span>
      </div>
      <Burger/>
    </Nav>
  );
};

export default Navbar;
