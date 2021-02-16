import React, { useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import UserForm from '../components/UserForm';
import useInput from '../hooks/useInput';
import Logo from '../components/Img_Components/Logo';

const StyledSection = styled.section`

  form {
    display: ${({ open }) => (open ? 'none' : null)};
  }

  p {
    margin: 0;
  }

  .message {
    display: ${({ open }) => (open ? null : 'none')};
    text-align: center;
    font: normal normal 300 18px/28px Open Sans;
    letter-spacing: -0.27px;
    color: #939393;
  } 
`;

const UserNew = () => {
  const firstName = useInput('');
  const familyName = useInput('');
  const email = useInput('');
  const password = useInput('');

  const [open, setOpen] = useState(false);

  return (
    <StyledSection className='container' open={open}>
      <div className='logo-wrapper'>
        <Logo/>
      </div>
      <div className='main-wrapper'>
        <h1>{open
          ? 'Thank You!'
          : 'Sign Up Today!'}</h1>
        <div className='message'>
          <p>
            Please check your email for a link to confirm
            your email address and finish the sign up process.
          </p>
        </div>
        <UserForm
          handleSubmit = {
            async (evt) => {
              evt.preventDefault();
              try {
                await Axios({
                  method: 'post',
                  url: '/user',
                  data: {
                    firstName: firstName.value,
                    familyName: familyName.value,
                    email: email.value,
                    password: password.value,
                  },
                });
                setOpen(!open);
                setTimeout(() => navigate('/'), 1e4);
              } catch (err) {
                const { response } = err;
                alert(response.data.message);
              }
            }}
          firstName={firstName}
          familyName={familyName}
          email={email}
          password={password}
          title='SUBMIT' />
      </div>
    </StyledSection>
  );
};

export default UserNew;
