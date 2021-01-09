import React, { useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import NavBar from '../components/Nav/NavBar';
import { isLoggedIn, handleRefreshToken } from '../services/auth';
import GlobalStyles from '../styles/GlobalStyles';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction:  column;
  justify-content: space-between;
  height: 90vh;
`;

const Layout = ({ children }) => {
  useEffect(() => {
    if (isLoggedIn()) {
      handleRefreshToken();
      setInterval(handleRefreshToken, 60e3 * 2 - 1e3);
    }
  }, []);

  return (
    <StyledWrapper>
      <GlobalStyles/>
      <NavBar/>
      {children}
      <Footer/>
    </StyledWrapper>
  );
};

export default Layout;
