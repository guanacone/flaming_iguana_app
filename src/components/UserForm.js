import React from 'react';
import SubmitButton from './Buttons/SubmitButton';

const UserForm = ({
  firstName,
  familyName,
  email,
  password,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
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
    <SubmitButton name='SAVE CHANGES'/>
  </form>
);

export default UserForm;
