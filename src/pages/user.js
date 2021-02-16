import React from 'react';
import { Router } from '@reach/router';
import UserIndex from '../components/UserIndex';
import UserProfile from '../components/UserProfile';

const User = () => (
  <Router basepath='/user'>
    <UserIndex path='/' />
    <UserProfile path='/:id' />
  </Router>
);

export default User;
