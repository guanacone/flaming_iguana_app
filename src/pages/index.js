import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledSection = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: -1;

    .logo {
    width: 25%;
    min-width: 200px;
    margin-top: 5%;
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
  console.log({ data });

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
