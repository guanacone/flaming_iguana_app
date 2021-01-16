import React from 'react';

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
    <input className='submit-button' type='submit' value='Submit' />
  </form>
);

export default UserForm;
