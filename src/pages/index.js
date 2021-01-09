import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

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
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "iguana_logo.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <StyledSection>
      <Img
        className='logo'
        fluid={data.file.childImageSharp.fluid}
        alt='vectorized picture of an iguana head'
      />
      <h1>Welcome to The Flaming Iguana</h1>
    </StyledSection>
  );
};

export default Home;
