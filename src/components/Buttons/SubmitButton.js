import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    background: #9ECF73 0% 0% no-repeat padding-box;
    font: normal normal 600 17px/23px Open Sans;
    letter-spacing: 0.51px;
    color: #FFFFFF;
    text-transform: uppercase;
    opacity: 1;
    cursor: pointer;
    border: 1px solid white;
`;

const SubmitButton = (props) => (
  <StyledInput className='submit-button' type='submit' value={props.name} onClick={props.handleClick}/>
);

export default SubmitButton;
