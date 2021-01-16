import React from 'react';
import { Router } from '@reach/router';
import UserIndex from '../components/UserIndex';
import UserProfile from '../components/UserProfile';
import UserEdit from '../components/UserEdit';
import PasswordEdit from '../components/PasswordEdit';

const User = () => (
  <Router basepath='/user'>
    <UserIndex path='/' />
    <UserProfile path='/:id' />
    <UserEdit path='/:id/edit' />
    <PasswordEdit path='/:id/password_edit' />
  </Router>
);

export default User;
