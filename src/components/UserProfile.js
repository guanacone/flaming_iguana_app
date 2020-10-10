import React from 'react';
import { Link, navigate } from 'gatsby';
import axios from 'axios';
import styled from 'styled-components';
import useFetchAPI from '../hooks/useFetchAPI';

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
    await axios({
      method: 'delete',
      url: endpoint,
    });
    navigate('/user');
  }
};

const User = ({ id }) => {
  const { data, error } = useFetchAPI({ endpoint: `/user/${id}` });
  const getContent = (dataContent, errorContent) => {
    if (errorContent) {
      return (
        <p>{errorContent.message}</p>
      );
    } if (dataContent) {
      return (
        <>
          <p>User ID: {dataContent._id}</p>
          <p>First Name: {dataContent.firstName}</p>
          <p>Family Name: {dataContent.familyName}</p>
          <Link
                to={`/user/${dataContent._id}/edit`}
              >
            Edit
          </Link>
          <DeleteButton
                type='button'
                onClick={() => deleteUser(`user/${id}`)}
              >
            Delete User
          </DeleteButton>
        </>
      );
    }
    return (
      <p>loading...</p>
    );
  };
  return (
    <div>
      <h1>User Profile</h1>
      {getContent(data, error)}
    </div>
  );
};

export default User;
