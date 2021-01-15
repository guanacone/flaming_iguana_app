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
} from '@fortawesome/free-solid-svg-icons';
import { Link, navigate } from 'gatsby';
import { isLoggedIn, logout } from '../../services/auth';

const handleLogout = async (evt) => {
  evt.preventDefault();
  await logout();
  navigate('/login');
};

const NavWrapper = styled.div`
    font-size: 30px;

    a {
        text-decoration: none;
        :hover {
            svg {
                color: #3D3D3D;
            }
            span {
                opacity: 1;
            }
        }
    }

    .menu {
      display: flex;
    }

    .icon-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
            opacity: 0;
            color: #3D3D3D;
            font-size: 10px;
    font: normal normal 600 8px/11px Open Sans;
        }
    }

    .icon {
      width: 50px;
    }

  @media (max-width: 500px) {
    font-size: 20px;

    .icon-wrapper {
      width: 30px;
    }
  }  

  @media (max-width: 420px) {

    a {
        text-decoration: none;
        :hover {
            svg, span {
                color: lightgrey;
                text-decoration: underline;
            }
        }
    }

    svg {
      width: 30px;
    }

    .masker {
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
      position: fixed;
      top: 0;
      right: 0;
      opacity: 0.4;
      background-color: black;
      height: 100vh;
      width: 100vw;
    }

    .menu {
      flex-direction: column;
      background-color: #3D3D3D ;    
      opacity: 1;
      position: fixed;
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
      top: 0;
      right: 0;
      height: 100vh;
      min-width: 210px;
      width: 40vw;
      padding-top: 3.5rem;
      transition: transform 0.3s ease-in-out;
    }

    .icon-wrapper {
        display: flex;
        flex-direction: row;
        padding: 5px 15px;
        /* width: 100%; */
        span {
            opacity: 1;
            color: lightgrey;
            font-size: 20px;
            padding-left: 15px;
            white-space: nowrap;
        }
    }

    .icon {
      width: 40px;
    }
  }
`;

const MenuItems = ({ open }) => {
  return (
    <NavWrapper open={open}>
      <div className='masker'></div>
      <div className='menu'>
        <Link to={'/'}>
          <div className='icon-wrapper'>
            <FontAwesomeIcon className='icon' icon={faHome} />
            <span>HOME</span>
          </div>
        </Link>
        {isLoggedIn()
          ? <>
            <Link to={'/user'}>
              <div className='icon-wrapper'>
                <FontAwesomeIcon className='icon' icon={faUsers} />
                <span>USERS</span>
              </div>
            </Link>
            <Link to={'/user'}>
              <div className='icon-wrapper'>
                <FontAwesomeIcon className='icon' icon={faUserCircle} />
                <span>PROFILE</span>
              </div>
            </Link>
            <Link to={'#'} onClick={(evt) => { handleLogout(evt); }}>
              <div className='icon-wrapper'>
                <FontAwesomeIcon className='icon' icon={faSignOutAlt} />
                <span>SIGN OUT!</span>
              </div>
            </Link>
          </>
          : <>
            <Link to={'/login'}>
              <div className='icon-wrapper'>
                <FontAwesomeIcon className='icon' icon={faSignInAlt} />
                <span>LOG IN!</span>
              </div>
            </Link>
            <Link to={'/user/new'}>
              <div className='icon-wrapper'>
                <FontAwesomeIcon className='icon' icon={faUserPlus} />
                <span>SIGN UP!</span>
              </div>
            </Link>
          </>
        }
      </div>
    </NavWrapper>
  );
};

export default MenuItems;
