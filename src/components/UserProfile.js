import React, { useEffect, useState } from 'react';
import { Link, navigate } from 'gatsby';
import axios from 'axios';
import useAxios from 'axios-hooks';
import styled from 'styled-components';
import jwt from 'jsonwebtoken';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPen,
} from '@fortawesome/free-solid-svg-icons';
import { isLoggedIn, getUser } from '../services/auth';
import hashEmail from '../utils/hashEmail';
import Logo from './Img_Components/Logo';
import UserEdit from './UserEdit';

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

    .icon {
      cursor: pointer;
      padding-left: 10px;
    }
  }

  .right {
    margin-left: 50px;
    flex-grow: 1;
  }

`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: #007bff;
  cursor: pointer;

  &:hover{
  color: #0056b3;
  text-decoration: underline;
  }

  &:focus{
    outline: none;
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
  if (!isLoggedIn()) {
    navigate('/login');
  }

  const user = getUser();
  const { user: loggedInUser } = jwt.decode(user.token);
  const [editing, setEditing] = useState(false);
  const [{ data, loading, error }, refetch] = useAxios({
    url: `/user/${id}`,
    headers: { Authorization: `Bearer ${user.token}` },
  });

  useEffect(() => {
    refetch();
  }, [editing]);

  return (
    <StyledSection>
      {error
        ? <p>{error.message}</p>
        : null
      }
      {data
        ? <>
          <aside className='left'>
            { loggedInUser._id === id || loggedInUser.roles.find((role) => role === 'admin')
              ? <>
                <h1>Your Profile</h1>
                <h2>User: {id}</h2>
              </>
              : null
            }
            <img src={`https://www.gravatar.com/avatar/${hashEmail(data.email)}?s=200`} />
            { loggedInUser._id === id || loggedInUser.roles.find((role) => role === 'admin')
              ? <Link to={'#'}>Edit Password</Link>
              : null
            }
            {loggedInUser.roles && loggedInUser.roles.find((role) => role === 'admin')
              ? <DeleteButton type='button' onClick={() => deleteUser(`user/${id}`)}>
                Delete User
              </DeleteButton>
              : null
            }
          </aside>
          <center>
            {!editing
              ? <>
                <h3>{data.firstName} {data.familyName}
                  { loggedInUser._id === id || loggedInUser.roles.find((role) => role === 'admin')
                    ? <FontAwesomeIcon className='icon' icon={faPen} onClick={() => setEditing(true)}/>
                    : null
                  }
                </h3>
                <h4>{data.email}</h4>
                <h4>Biography:</h4>
                <p>{data.biography }</p>
              </>
              : <UserEdit
                data={data} id={id} user={user} setEditing={setEditing}
              />
            }
          </center>
          <div className='right'>
            <Logo/>
          </div>
        </>
        : null}
      {loading
        ? <p>...loading</p>
        : null
      }
    </StyledSection>
  );
};

export default User;
