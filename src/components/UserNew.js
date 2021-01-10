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
  /* margin: ${({ open }) => (open ? 0 : null)};   */
  }

  form {
    display: ${({ open }) => (open ? 'none' : null)};
  }

  p {
    margin: 0;
  }

  #wrapper {
    grid-area: 'form';
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .message {
    display: ${({ open }) => (open ? null : 'none')};
    text-align: center;
    font: normal normal 300 18px/28px Open Sans;
    letter-spacing: -0.27px;
    color: #939393;
  }

  #logo {
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

  const [open, setOpen] = useState(false);

  return (
    <StyledSection open={open}>
      <div id='logo'>
        <Img
          style={{ width: '20vw', minWidth: '200px' }}
          fluid={data.file.childImageSharp.fluid}
          alt='vectorized picture of an iguana head'
        />
      </div>
      <div id='wrapper'>
        <h1>{open
          ? 'Thank You!'
          : 'Sign Up Today!'}</h1>
        <div className='message'>
          <p>
            Please check your email for a link to confirm
            your email address and finish the sign up process.
          </p>
        </div>
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
                setOpen(!open);
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
    </StyledSection>
  );
};

export default UserNew;
