import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 25px;
  }

  input {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #CECED0;
    border-radius: 8px;
    opacity: 1;
    width: 302px;
    height: 40px;

    ::placeholder {
      text-align: left;
      font: normal normal 300 18px/24px Open Sans;
      letter-spacing: -0.27px;
      color: #939393;
      padding-left: 10px;
      opacity: 1;
    }
  }

  .submit-button {
    background: #9ECF73 0% 0% no-repeat padding-box;
    font: normal normal 600 17px/23px Open Sans;
    letter-spacing: 0.51px;
    color: #FFFFFF;
    text-transform: uppercase;
    opacity: 1;
      }
`;

const UserForm = ({
  firstName,
  familyName,
  email,
  password,
  handleSubmit,
}) => (
  <StyledForm onSubmit={handleSubmit}>
    <label>
      <input type='text' placeholder='First Name' required {...firstName.bind}/>
    </label>
    <label>
      <input type='text' placeholder='Last Name' required {...familyName.bind} />
    </label>
    <label>
      <input type='email' placeholder='Email' required {...email.bind} />
    </label>
    {password !== undefined
      ? <label>
        <input type='password' placeholder='Password' required minLength='6' {...password.bind} />
      </label>
      : null }
    <input className='submit-button' type='submit' value='Submit' />
  </StyledForm>
);

export default UserForm;
