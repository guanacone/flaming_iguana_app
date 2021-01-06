import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  .logo {
    font-size: 30px;
    color: var(--green);
    font-family: 'Aleo';
    font-weight: bold;
    }
`;

const Navbar = () => {
  console.log('NavBar');
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

// import { Link, navigate } from 'gatsby';
// import React from 'react';
// import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faHome,
//   faSignInAlt,
//   faSignOutAlt,
//   faUserPlus,
//   faUserCircle,
//   faUsers,
//   faBars,
// } from '@fortawesome/free-solid-svg-icons';
// import { isLoggedIn, logout } from '../../services/auth';

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;

// span{
// color: #3D3D3D;
// font-size: 6px;
// opacity: 0;
// }
// /* .icon {
//   color: lightgrey;
//   display: none;
// } */
// //   }

// //   .brand {
// color: var(--green);
// font-family: 'Aleo';
// font-weight: bold;
// //   }

// //   .nav-wrapper {
// display: flex;
// //   }

// //   .icon-wrapper {
// display: flex;
// flex-direction: column;
// align-items:center;
// font-family: Open Sans;
// padding-right: 15px;
// //   }

// //   .icon {
// display: none;
// //   }

// //   @media screen and (max-width: 600px) {
// .nav-wrapper a {display: none;}
// .nav-wrapper a.icon {
//   display: block;
// }
// //   }
// // `;

// // const NavBar = () => {
// //   const iconBar = document.querySelector('.nav-wrapper');
// //   console.log({ iconBar });
// //   return (
// <Header>
//   <div>
//     <span className='brand'>THE FLAMING IGUANA</span>
//   </div>

// </Header>
//   );
// };

// export default NavBar;
