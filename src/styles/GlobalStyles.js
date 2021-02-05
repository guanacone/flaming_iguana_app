import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --green: #9ECF73;
        --gray: #3D3D3D
    }

    body {
        background: ${({ isProtected }) => (isProtected ? 'var(--green)' : 'white')};
        color: ${({ isProtected }) => (isProtected ? 'white' : 'var(--green)')};
        svg {
            color: ${({ isProtected }) => (isProtected ? 'white' : 'lightgrey')};
        }
    }

    h1 {
        color: ${({ isProtected }) => (isProtected ? 'white' : 'var(--gray)')};
        font: normal normal 300 40px/55px Open Sans;
        letter-spacing: -0.6px;
        opacity: 1;
        display: inline-block;
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #CECED0;
        border-radius: 8px;
        opacity: 1;
        width: 302px;
        height: 40px;
        margin-bottom: 25px;

        ::placeholder {
        text-align: left;
        font-family: Open Sans;
        font-size: 18px;
        letter-spacing: -0.27px;
        color: #939393;
        opacity: 1;
        padding-left: 20px;
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
            background: ${({ isProtected }) => (isProtected ? 'white' : 'var(--gray)')};
        }
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
