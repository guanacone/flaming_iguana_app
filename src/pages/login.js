import React from 'react';
import { Link, navigate } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import { handleLogin, isLoggedIn } from '../services/auth';
import useInput from '../hooks/useInput';
import Logo from '../components/Img_Components/Logo';
import SubmitButton from '../components/Buttons/SubmitButton';

const StyledSection = styled.section`
  a {
    text-decoration: none;
    font: normal normal normal 12px/17px Open Sans;
    color: var(--green);
    position: relative;
    top: -20px;

    svg{
      color: var(--green);
    }
  }

  .icon {
    padding-right: 5px;
  }

  .submit-button {
    color: white;
    background: var(--green);
  }
`;

const Login = () => {
  const email = useInput('');
  const password = useInput('');

  if (isLoggedIn()) {
    navigate('/user');
  }

  return (
    <StyledSection className='container'>
      <div className='logo-wrapper'>
        <Logo/>
      </div>
      <div className='main-wrapper'>
        <h1>Log In!</h1>
        <form onSubmit={(evt) => {
          evt.preventDefault();
          handleLogin({ email: email.value, password: password.value });
        }}>
          <label>
            <input type='email' placeholder='Email' required {...email.bind} />
          </label>
          <label>
            <input type='password' placeholder='Password' required {...password.bind} />
          </label>
          <Link to='/forgot_password'><FontAwesomeIcon className='icon' icon={faQuestionCircle}/>Forgot your password?</Link>
          <SubmitButton>LOGIN</SubmitButton>
        </form>
      </div>
    </StyledSection>
  );
};

export default Login;
