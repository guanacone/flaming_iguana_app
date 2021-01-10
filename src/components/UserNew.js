import React, { useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import UserForm from './UserForm';
import useInput from '../hooks/useInput';

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    'logo wrapper .';

  h1 {
  font: normal normal 300 40px/55px Open Sans;
  letter-spacing: -0.6px;
  color: #3D3D3D;
  opacity: 1;
  display: inline-block;
  text-align: center;
  }

  #wrapper {
    /* border: 1px solid black;  */
    grid-area: 'form';
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #logo {
    /* border: 3px solid yellow;  */
    grid-area: 'logo';
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 20px;
  }

  @media(max-width: 700px) {
    display: flex;
    justify-content: center;

    #logo {
      display: none;
    }
  }
`;

const UserNew = () => {
  const firstName = useInput('');
  const familyName = useInput('');
  const email = useInput('');
  const password = useInput('');
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

  const [title, setTitle] = useState('Sign Up Today!');
  return (
    <StyledSection>
      <div id='logo'>
        <Img
          style={{ width: '30vw', minWidth: '200px' }}
          fluid={data.file.childImageSharp.fluid}
          alt='vectorized picture of an iguana head'
        />
      </div>
      <div id='wrapper'>
        <h1>{title}</h1>
        <UserForm
          handleSubmit = {
            async (evt) => {
              evt.preventDefault();
              try {
                await Axios({
                  method: 'post',
                  url: '/user',
                  data: {
                    firstName: firstName.value,
                    familyName: familyName.value,
                    email: email.value,
                    password: password.value,
                  },
                });
                setTitle('/login');
              } catch (err) {
                const { response } = err;
                alert(response.data.message);
              }
            }}
          firstName={firstName}
          familyName={familyName}
          email={email}
          password={password} />
      </div>
      {/* <div id='container'></div> */}
    </StyledSection>
  );
};

export default UserNew;
