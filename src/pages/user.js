import React from 'react';
import { Router } from '@reach/router';
import UserIndex from '../components/UserIndex';
import UserProfile from '../components/UserProfile';
import UserEdit from '../components/UserEdit';
import PasswordEdit from '../components/PasswordEdit';
// import PasswordReset from './reset_password';

const User = () => (
  <Router basepath='/user'>
    <UserIndex path='/' />
    <UserProfile path='/:id' />
    <UserEdit path='/:id/edit' />
    <PasswordEdit path='/:id/password_edit' />
    {/* <PasswordReset path='/password_reset' /> */}
  </Router>
);

export default User;
