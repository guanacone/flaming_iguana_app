import React from 'react';
import styled from 'styled-components';
import SubmitButton from './Buttons/SubmitButton';

const StyledTextarea = styled.textarea`
        border: 1px solid #CECED0;
        border-radius: 8px;
        opacity: 1;
        width: 302px;
        resize: none;
        margin-bottom: 25px;
        color: #939393;
        padding: 20px 0 0 20px;

        ::placeholder {
        text-align: left;
        font-family: Open Sans;
        font-size: 18px;
        letter-spacing: -0.27px;
        color: #939393;
        opacity: 1;
        }`;

const UserForm = ({
  firstName,
  familyName,
  email,
  password,
  biography,
  handleSubmit,
  title,
}) => (
  <form onSubmit={handleSubmit}>
    <input type='text' placeholder='First Name' required {...firstName.bind}/>
    <input type='text' placeholder='Last Name' required {...familyName.bind}/>
    <input type='email' placeholder='Email' required {...email.bind}/>
    {password && (
      <input type='password' placeholder='Password' required minLength='6' {...password.bind}/>)}
    {biography && (
      <StyledTextarea placeholder='Biography (max. 250 chars)' rows='10' maxLength='250' {...biography.bind}/>)}
    <SubmitButton>{title}</SubmitButton>
  </form>
);

export default UserForm;
