import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: 0.5px solid white;
    border-radius: 10px;
    padding: 10px;
    font-family: Open Sans;
    margin-bottom: 20px;
    cursor: pointer;
    width: ${({ width }) => (width || '326px')};  
    background: var(--green);
    color: white;
    :hover {
      background: #3D3D3D;
      border: 0.5px solid #3D3D3D;
    }
`;

const SubmitButton = (props) => (
  <StyledButton
    className='submit-button'
    type='submit'
    onClick={props.onClick}
    width={props.width}>
    {props.children}
  </StyledButton>
);

export default SubmitButton;
