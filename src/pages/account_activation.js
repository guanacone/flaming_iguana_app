import React from 'react';
import { Link, navigate } from 'gatsby';
import get from 'lodash.get';
import { useQueryParam, StringParam } from 'use-query-params';
import useAxios from 'axios-hooks';
import styled from 'styled-components';
import { isLoggedIn } from '../services/auth';
import Logo from '../components/Img_Components/Logo';

const StyledSection = styled.section`
  text-align: center;
    font: normal normal 300 18px/28px Open Sans;
    letter-spacing: -0.27px;
    color: #939393;
`;

const UserActivation = () => {
  if (isLoggedIn()) {
    navigate('/user');
  }

  const [activationToken] = useQueryParam('activationToken', StringParam);
  const [{ data, loading, error }] = useAxios({
    url: '/user/activate_account',
    headers: { Authorization: `Bearer ${activationToken}` },
  });
  const axiosMsg = get(error, ['response', 'data', 'message']);
  return (
    <StyledSection className='container'>
      <div className='logo-wrapper'>
        <Logo/>
      </div>
      <div className='main-wrapper'>
        <h1>Account Activation</h1>
        {error && (
          <p>{axiosMsg}</p>
        )}
        {data && (
          <p>Your account has been activated. Please <Link to={'/login'}>log in</Link></p>
        )}
        {loading && (<p>...loading</p>)}
      </div>
    </StyledSection>
  );
};

export default UserActivation;
