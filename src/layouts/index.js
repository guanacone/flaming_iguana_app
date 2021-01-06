import React, { useEffect } from 'react';
import NavBar from '../components/Nav/NavBar';
import { isLoggedIn, handleRefreshToken } from '../services/auth';
import GlobalStyles from '../styles/GlobalStyles';

const Layout = ({ children }) => {
  useEffect(() => {
    if (isLoggedIn()) {
      handleRefreshToken();
      setInterval(handleRefreshToken, 60e3 * 2 - 1e3);
    }
  }, []);

  return (
    <div>
      <GlobalStyles/>
      <NavBar/>
      {children}
    </div>
  );
};

export default Layout;
