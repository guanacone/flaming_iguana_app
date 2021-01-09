import React, { useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import UserForm from './UserForm';
import useInput from '../hooks/useInput';

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  padding-top: 50px;

  h1 {
  font: normal normal 300 40px/55px Open Sans;
  letter-spacing: -0.6px;
  color: #3D3D3D;
  opacity: 1;
  display: inline-block;
  text-align: center;
  }

  #wrapper {
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* flex-grow: 1; */
  }

  #container {
    /* border: 3px solid yellow; */
    flex-grow: 1;
  }

  #logo {
    /* border: 2px solid red; */
    background: var(--green);
    margin-top: 20px;
    flex-grow: 1; 
  }
`;

const UserNew = () => {
  const firstName = useInput('');
  const familyName = useInput('');
  const email = useInput('');
  const password = useInput('');

  const [title, setTitle] = useState('Sign Up Today!');
  return (
    <StyledSection>
      <div id='logo'></div>
      <div id='wrapper'>
        <h1>{title}</h1>
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
                setTitle('/login');
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
      <div id='container'>
      </div>
    </StyledSection>
  );
};

export default UserNew;
