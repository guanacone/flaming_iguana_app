import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Logo = () => {
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
    <Img
      className='logo'
      fluid={data.file.childImageSharp.fluid}
      alt='vectorized picture of an iguana head'
    />
  );
};

export default Logo;
