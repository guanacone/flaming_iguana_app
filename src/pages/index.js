import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Img_Components/Logo';

const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: -1;

    h1 {
      text-align: center;
      font: normal normal 100 40px/55px Open Sans;
      letter-spacing: -0.6px;
      color: #3D3D3D;
    }

    .logo {
    width: 18vw;
    min-width: 200px;

  }


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
