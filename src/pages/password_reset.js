import React from 'react';
import { StringParam, useQueryParam } from 'use-query-params';
import jwt from 'jsonwebtoken';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import handleSubmit from '../utils/handleSubmit';
import Logo from '../components/Img_Components/Logo';
import SubmitButton from '../components/Buttons/SubmitButton';

const StyledSection = styled.section`
  a {
    text-decoration: none;
    font: normal normal normal 12px/17px Open Sans;
    color: var(--green);
    position: relative;
    top: -20px;

    svg{
      color: var(--green);
    }
  }

  .icon {
    padding-right: 5px;
  }
`;

const PasswordReset = () => {
  const [resetToken] = useQueryParam('resetToken', StringParam);
  const newPassword = useInput('');
  const confirmNewPassword = useInput('');

  if (!resetToken) {
    return (
      <h2>Please request new password reset link</h2>
    );
  }

  const { user: { _id } } = jwt.decode(resetToken);

  return (
    <StyledSection className='container'>
      <div className='logo-wrapper'>
        <Logo/>
      </div>
      <div className='main-wrapper'>
        <h1>Reset Password!</h1>
        <form
          onSubmit={
            async (evt) => {
              evt.preventDefault();
              if (newPassword.value !== confirmNewPassword.value) {
                alert('new passwords do not match');
              } else {
                try {
                  await handleSubmit({
                    method: 'post',
                    endpoint: `/user/reset_password/${_id}`,
                    data: {
                      newPassword: newPassword.value,
                    },
                    token: resetToken,
                  });
                  navigate('/login');
                } catch (err) {
                  const { response } = err;
                  alert(response.data.message);
                }
              }
            }}>
          <label>
            <input type='password' placeholder='New Password' required {...newPassword.bind} />
          </label>
          <label>
            <input type='password' placeholder='Confirm New Password' required {...confirmNewPassword.bind} />
          </label>
          <SubmitButton/>
        </form>
      </div>
    </StyledSection>
  );
};

export default PasswordReset;
