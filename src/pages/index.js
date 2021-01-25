import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Img_Components/Logo';

const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 420px) {
    flex-direction: column-reverse;
  }
`;

const Home = () => {
  return (
    <StyledSection>
      <Logo />
      <h1>Welcome to The Flaming Iguana</h1>
    </StyledSection>
  );
};

export default Home;
