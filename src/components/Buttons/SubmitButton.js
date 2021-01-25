import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: 0.5px solid white;
    border-radius: 10px;
    padding: 10px;
    font-family: Open Sans;
    margin-bottom: 20px;
    cursor: pointer;
    width: 302px;  
    background: none;
`;

const SubmitButton = (props) => (
  <StyledButton className='submit-button' type='submit' onClick={props.onClick}>
    {props.children}
  </StyledButton>
);

export default SubmitButton;
