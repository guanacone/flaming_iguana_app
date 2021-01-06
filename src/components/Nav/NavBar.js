import { Link, navigate } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSignInAlt,
  faSignOutAlt,
  faUserPlus,
  faUserCircle,
  faUsers,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { isLoggedIn, logout } from '../../services/auth';

const handleLogout = async (evt) => {
  evt.preventDefault();
  await logout();
  navigate('/login');
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  a{
    text-decoration: none;
    :hover {
      svg {
        color: #3D3D3D;
      }
      span {
        opacity: 1;
      }
    }

    svg {
      color: lightgrey;
    }

    span{
    color: #3D3D3D;
    font-size: 6px;
    opacity: 0;
    }
    /* .icon {
      color: lightgrey;
      display: none;    
    } */
  }

  .brand {
    color: var(--green);
    font-family: 'Aleo';
    font-weight: bold;
  }

  .nav-wrapper {
    display: flex;
  }

  .icon-wrapper {
    display: flex;
    flex-direction: column;
    align-items:center;
    font-family: Open Sans;
    padding-right: 15px;   
  }

  .icon {
    display: none;
  }

  @media screen and (max-width: 600px) {
    .nav-wrapper a {display: none;}
    .nav-wrapper a.icon {
      display: block;
    }
  }
`;

const NavBar = () => {
  const iconBar = document.querySelector('.nav-wrapper');
  console.log({ iconBar });
  return (
    <Header>
      <div>
        <span className='brand'>THE FLAMING IGUANA</span>
      </div>
      <div className='nav-wrapper'>
        <Link to={'/'}>
          <div className='icon-wrapper'>
            <FontAwesomeIcon icon={faHome} />
            <span>HOME</span>
          </div>
        </Link>
        {isLoggedIn()
          ? <>
            <Link to={'/user'}>
              <div className='icon-wrapper'>
                <FontAwesomeIcon icon={faUsers} />
                <span>Users</span>
              </div>
            </Link>
            <Link to={'/user'}>
              <div className='icon-wrapper'>
                <FontAwesomeIcon icon={faUserCircle} />
                <span>Profile</span>
              </div>
            </Link>
            <Link to={'#'} onClick={(evt) => { handleLogout(evt); }}>
              <div className='icon-wrapper'>
                <FontAwesomeIcon icon={faSignOutAlt} />
                <span>Sign Out!</span>
              </div>
            </Link>
          </>
          : <>
            <Link to={'/login'}>
              <div className='icon-wrapper'>
                <FontAwesomeIcon icon={faSignInAlt} />
                <span>Sign In!</span>
              </div>
            </Link>
            <Link to={'/user/new'}>
              <div className='icon-wrapper'>
                <FontAwesomeIcon icon={faUserPlus} />
                <span>Sign Up!</span>
              </div>
            </Link>
          </>
        }
        <Link to={'#'} className='icon'>
          <div className='icon-wrapper'>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </Link>
      </div>
    </Header>
  );
};

export default NavBar;
