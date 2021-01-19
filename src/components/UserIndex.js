import React from 'react';
import { Link, navigate, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import useFetchAPI from '../hooks/useFetchAPI';
import { getUser, isLoggedIn } from '../services/auth';
import isBrowser from '../utils/isBrowser';
import hashEmail from '../utils/hashEmail';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-left: 10px;
  }

  .cards-wrapper {   
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .title-wrapper, .cards-wrapper {
    width: 80vw;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border-radius: 8px;
    width: 18vw;
    min-width: 185px;
    margin: 10px 10px;
    
    img {
      width: 80%;
      border-radius: 50%;
      margin: 50px 10px 10px;
    }  

    a {
      text-decoration: none;
      text-align: center;
      font: normal normal 600 22px/30px Open Sans;
      letter-spacing: -0.33px;
      color: #333333;
      padding: 10px 10px 40px;
    }
  }

  @media (max-width: 520px) {
    .cards-wrapper { 
      flex-direction: column;
      align-items: center;
    }

    .title-wrapper {
      text-align: center;
      flex-direction: column-reverse;
      align-items: center;

      h1 {
        margin-left: 0;
      }
    }
  }
`;

const UserIndex = () => {
  if (isBrowser() && !isLoggedIn()) {
    navigate('/login');
  }

  const user = getUser();
  const { data, error } = useFetchAPI({ endpoint: '/user', token: user.token });
  const getContent = (dataContent, errorContent) => {
    if (errorContent) {
      return (
        <p>{errorContent.message}</p>
      );
    }

    if (dataContent) {
      return (
        <>
          {dataContent.map((profile) => {
            return (
              <div key={profile._id} className='card'>
                <img src={`https://www.gravatar.com/avatar/${hashEmail(profile.email)}?s=200`} />
                <Link to={`/user/${profile._id}`}>
                  {profile.firstName} {profile.familyName}
                </Link>
              </div>
            );
          })}
        </>
      );
    }
    return (
      <p>loading...</p>
    );
  };
  const logo = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "iguana_logo.png"}) {
        childImageSharp {
          fixed(height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <StyledSection>
      <div className='title-wrapper'>
        <h1>User Index</h1>
        <Img fixed={logo.file.childImageSharp.fixed}/>
      </div>
      <div className='cards-wrapper'>
        { getContent(data, error)}
      </div>
    </StyledSection>
  );
};

export default UserIndex;
