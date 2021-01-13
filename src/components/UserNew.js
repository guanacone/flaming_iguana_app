import React, { useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import UserForm from './UserForm';
import useInput from '../hooks/useInput';
import Logo from './Img_Components/Logo';

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  h1 {
  font: normal normal 300 40px/55px Open Sans;
  letter-spacing: -0.6px;
  color: #3D3D3D;
  opacity: 1;
  display: inline-block;
  text-align: center;
  }

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

  #wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    width: 20vw;
    min-width: 200px;
  }

  @media(max-width: 700px) {
    display: flex;
    justify-content: center;

    #logo-wrapper {
      display: none;
    }
  }
`;

const UserNew = () => {
  const firstName = useInput('');
  const familyName = useInput('');
  const email = useInput('');
  const password = useInput('');

  const [open, setOpen] = useState(false);

  return (
    <StyledSection open={open}>
      <div id='logo-wrapper'>
        <Logo />
      </div>
      <div id='wrapper'>
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
          password={password} />
      </div>
    </StyledSection>
  );
};

export default UserNew;
