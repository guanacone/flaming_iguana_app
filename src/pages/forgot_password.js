import { navigate } from '@reach/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../components/Img_Components/Logo';
import useInput from '../hooks/useInput';
import handleSubmit from '../utils/handleSubmit';
import SubmitButton from '../components/Buttons/SubmitButton';

const StyledSection = styled.section`

  form {
      display: ${({ sent }) => (sent ? 'none' : null)};
    }

    p {
      margin: 0;
    }

    .message {
      display: ${({ sent }) => (sent ? null : 'none')};
      text-align: center;
      font: normal normal 300 18px/28px Open Sans;
      letter-spacing: -0.27px;
      color: #939393;
    } 
`;

const ForgotPassword = () => {
  const [sent, setSent] = useState(false);
  const userEmail = useInput('');

  return (
    <StyledSection className='container' sent={sent}>
      <div className='logo-wrapper'>
        <Logo/>
      </div>
      <div className='main-wrapper'>
        <h1>{sent
          ? 'Reset Link Sent'
          : 'Reset Password'}
        </h1>
        <div className='message'>
          <p>
            A password reset link has been sent if there is a account registered with this email.
          </p>
        </div>
        <form
          onSubmit={
            async (evt) => {
              evt.preventDefault();
              try {
                await handleSubmit({
                  evt,
                  method: 'post',
                  endpoint: '/user/send_reset_password_link',
                  data: {
                    email: userEmail.value,
                  },
                });
                setSent(true);
                setTimeout(() => navigate('/'), 1e4);
              } catch (err) {
                const { response } = err;
                alert(response.data.message);
              }
            }
          }>
          <label>
            <input type='email' placeholder='Email' required {...userEmail.bind}/>
          </label>
          <SubmitButton>SEND RESET EMAIL</SubmitButton>
        </form>
      </div>
    </StyledSection>
  );
};

export default ForgotPassword;
