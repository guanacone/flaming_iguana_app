import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --green: #9ECF73;
        --gray: #3D3D3D
    }

    body {
        background: ${({ isProtected }) => (isProtected ? 'var(--green)' : 'white')};
        font-family: Open Sans; 
        span, svg {
            color: ${({ isProtected }) => (isProtected ? 'white' : 'lightgrey')};
        }
    }

    h1 {
        font-weight: 300;
        font-size: 40px;
        line-height: 55px;
        letter-spacing: -0.6px;
        opacity: 1;
        display: inline-block;
        text-align: center;
    }

    h1, h2, h3, h4, p {
        color: ${({ isProtected }) => (isProtected ? 'white' : 'var(--gray)')};
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        border: 1px solid #CECED0;
        border-radius: 8px;
        opacity: 1;
        width: 302px;
        height: 40px;
        margin-bottom: 25px;
        color: #939393;
        padding-left: 20px;

        ::placeholder {
        text-align: left;
        font-family: Open Sans;
        font-size: 18px;
        letter-spacing: -0.27px;
        color: #939393;
        opacity: 1;
        }
    }

    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .logo-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo {
        width: 20vw;
        min-width: 200px;
    }

    .main-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .burger {
        div {
            background: ${({ isProtected }) => (isProtected ? 'white' : '#CECED0')};
        }
    }

    #text-logo {
        color: ${({ isProtected }) => (isProtected ? 'white' : 'var(--green)')};
    }

    @media(max-width: 700px) {
        .container {
            display: flex;
            justify-content: center;
        }

        .logo-wrapper {
            display: none;
        }
    }
`;
export default GlobalStyles;
