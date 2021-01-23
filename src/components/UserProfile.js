import React, { useEffect, useState } from 'react';
import { Link, navigate } from 'gatsby';
import axios from 'axios';
import useAxios from 'axios-hooks';
import styled from 'styled-components';
import jwt from 'jsonwebtoken';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPen,
  faLock,
  faUserTimes,
} from '@fortawesome/free-solid-svg-icons';
import { isLoggedIn, getUser } from '../services/auth';
import hashEmail from '../utils/hashEmail';
import Logo from './Img_Components/Logo';
import UserEdit from './UserEdit';
import PasswordEdit from './PasswordEdit';
import SubmitButton from './Buttons/SubmitButton';

const StyledSection = styled.section`
  display: flex;
  margin: 0 7.5vw;
  
  h1, h2 {
    text-align: left;
    margin: 0;
  }

  h2 {
    font: normal normal normal 14px/19px Open Sans;
    letter-spacing: -0.21px;
  }

  .left {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    img {
      border: 6px solid #FFF;
      border-radius: 50%;
      margin: 30px 10px;
    } 
  }
  
  center {
    flex-grow: 2;
    text-align: left;
  }

  .right {
    margin-left: 50px;
    flex-grow: 1;
  }

  .icon {
    width: 50px;
    cursor: pointer;
  }

  .submit-button {
    color: white;
  }

`;

const deleteUser = async (endpoint) => {
  if (window.confirm('Do you want to delete the user?')) {
    const user = getUser();
    await axios({
      method: 'delete',
      url: endpoint,
      headers: { Authorization: `Bearer ${user.token}` },
    });
    navigate('/user');
  }
};

const User = ({ id }) => {
  if (typeof window === 'undefined') return null;
  if (!isLoggedIn()) {
    navigate('/login');
  }

  const user = getUser();
  const { user: loggedInUser } = jwt.decode(user.token);
  const [editing, setEditing] = useState(false);
  const [passwordEdit, setPasswordEdit] = useState(false);
  const [{ data, loading, error }, refetch] = useAxios({
    url: `/user/${id}`,
    headers: { Authorization: `Bearer ${user.token}` },
  });
  useEffect(() => {
    console.log('running');
    navigate(`/user/${id}`);
  }, []);

  useEffect(() => {
    refetch();
  }, [editing]);

  return (
    <StyledSection>
      {error && (<p>{error.message}</p>)}

      {data && (
        <>
          <aside className='left'>
            { (loggedInUser._id === id || loggedInUser.roles.find((role) => role === 'admin')) && (
              <>
                <h1>Your Profile</h1>
                <h2>User: {id}</h2>
              </>
            )}
            <img src={`https://www.gravatar.com/avatar/${hashEmail(data.email)}?s=200`} />
            { (loggedInUser._id === id || loggedInUser.roles.find((role) => role === 'admin')) && (
              <Link to={'#'} onClick={() => setPasswordEdit(true)}>
                <SubmitButton>
                  <FontAwesomeIcon className='icon' icon={faLock}/>
                  <span>CHANGE PASSWORD</span>
                </SubmitButton>
              </Link>
            )}
            {(loggedInUser.roles && loggedInUser.roles.find((role) => role === 'admin')) && (
              <SubmitButton onClick={() => deleteUser(`user/${id}`)}>
                <FontAwesomeIcon className='icon' icon={faUserTimes} onClick={() => deleteUser(`/user/${id}`)}/>DELETE ACCOUNT
              </SubmitButton>
            )}
          </aside>
          <center>
            {(!editing && !passwordEdit) && (
              <>
                <h3>{data.firstName} {data.familyName}
                  {(loggedInUser._id === id || loggedInUser.roles.find((role) => role === 'admin')) && (<FontAwesomeIcon className='icon' icon={faPen} onClick={() => setEditing(true)}/>)}
                </h3>
                <p>{data.email}</p>
                <h4>Biography:</h4>
                <p>{data.biography }</p>
              </>
            )}
            {editing && (
              <UserEdit
                data={data} id={id} setEditing={setEditing}
              />
            )}
            {passwordEdit && (
              <PasswordEdit
                data={data} id={id} setPasswordEdit={setPasswordEdit}
              />
            )}
          </center>
          <div className='right'>
            <Logo/>
          </div>
        </>
      )}
      {(!data && loading) && (<p>...loading</p>)}
    </StyledSection>
  );
};

export default User;
