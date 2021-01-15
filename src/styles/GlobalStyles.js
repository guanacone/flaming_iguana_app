import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --green: #9ECF73;
    }

    body {
        background: ${({ isProtected }) => (isProtected ? 'var(--green)' : 'white')};
        color: ${({ isProtected }) => (isProtected ? 'white' : 'var(--green)')};
        svg {
            color: ${({ isProtected }) => (isProtected ? 'white' : 'lightgrey')};
        }
    }
`;
export default GlobalStyles;
