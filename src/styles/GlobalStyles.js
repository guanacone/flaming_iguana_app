import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --green: #9ECF73;
    }
    body {
        font-family: Open Sans, Helvetica Neue, sans-serif,
    }
    
    h1 {
        text-align: center;
        font: normal normal 300 40px/48px Open Sans;
        letter-spacing: -0.6px;
        color: #3D3D3D;
    }

    h3 {
        color: red;
    }
`;
export default GlobalStyles;
