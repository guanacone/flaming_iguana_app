import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`

  h2 {
  font: normal normal 300 10px/14px Open Sans;
  letter-spacing: 0px;
  color: #909090;
  text-align: center;
  opacity: 1;
  }

  a {
    font-weight: bold;
    text-decoration: underline;
    color: #909090;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <h2>Copyright &#169; 2012 <a href='mailto:ryan@bandada.ca?subject=contact inquiry'>Ryan Hryciuk</a> & <a href='mailto:gilles@rusca.dev?subject=contact inquiry'>Gilles Rusca</a></h2>
  </FooterWrapper>
);

export default Footer;
