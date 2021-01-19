import React, { useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import NavBar from '../components/Nav/NavBar';
import { isLoggedIn, handleRefreshToken } from '../services/auth';
import GlobalStyles from '../styles/GlobalStyles';
import 'normalize.css';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction:  column;
  justify-content: space-between;
  height: 100vh;
`;

const Layout = ({ location, children }) => {
  useEffect(() => {
    if (isLoggedIn()) {
      handleRefreshToken();
      setInterval(handleRefreshToken, 60e3 * 2 - 1e3);
    }
  }, []);

  const regExPattern = /^(\/user)/;
  const isProtected = regExPattern.test(location.pathname);

  return (
    <StyledWrapper>
      <GlobalStyles isProtected={isProtected}/>
      <NavBar/>
      {children}
      <Footer isProtected={isProtected}/>
    </StyledWrapper>
  );
};

export default Layout;
