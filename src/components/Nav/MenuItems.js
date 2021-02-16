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
import jwt from 'jsonwebtoken';
import { getUser, isLoggedIn, logout } from '../../services/auth';

const handleLogout = async (evt) => {
  evt.preventDefault();
  await logout();
  navigate('/login');
};

const NavWrapper = styled.div`
    font-size: 30px;

    .menu {
      display: flex;
    }

    .icon-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 10px;
      span {
        opacity: 0;
        font-size: 6px;
        line-height: 11px;
        font-weight: 600;
      }
      :hover {
        span {
          animation: fadein 1s forwards;
          @keyframes fadein {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        }
      }
    }

    .icon {
      width: 30px;
      font-size: 18px;
    }

  @media (max-width: 420px) {

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
      padding-top: 6rem;
      transition: transform 0.3s ease-in-out;
    }

    .icon-wrapper {
        display: flex;
        flex-direction: row;
        padding: 5px 15px;
        width: 100%;
        margin: 10px 0;
        span {
            opacity: 1;
            font-size: 18px;
            padding-left: 15px;
            white-space: nowrap;
          :hover {
            animation: none; 
          }
        }
    }

    .icon {
      width: 40px;
    }
  }
`;

const MenuItems = ({ isProtected, open, menuRef }) => {
  const { token } = getUser();
  console.log(isProtected);
  return (
    <NavWrapper isProtected={null} ref={menuRef} open={open}>
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
            <Link to={`/user/${jwt.decode(token).user._id}`}>
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
            <Link to={'/signup'}>
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
