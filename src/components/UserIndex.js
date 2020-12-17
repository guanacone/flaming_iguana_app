import React from 'react';
import { Link, navigate } from 'gatsby';
import useFetchAPI from '../hooks/useFetchAPI';
import { getUser, isLoggedIn } from '../services/auth';
import isBrowser from '../utils/isBrowser';

const UserIndex = () => {
  if (isBrowser() && !isLoggedIn()) {
    navigate('/login');
  }

  const user = getUser();
  const { data, error } = useFetchAPI({ endpoint: '/user', token: user.token });
  const getContent = (dataContent, errorContent) => {
    if (errorContent) {
      return (
        <p>{errorContent.message}</p>
      );
    }

    if (dataContent) {
      return (
        <ul>
          {dataContent.map((user) => (
            <li key={user._id}>
              <Link to={`/user/${user._id}`}>
                {user.familyName}, {user.firstName}
              </Link>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p>loading...</p>
    );
  };

  return (
    <div>
      <h1>User Index</h1>
      { getContent(data, error)}
    </div>
  );
};

export default UserIndex;
