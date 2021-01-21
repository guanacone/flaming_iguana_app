import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --green: #9ECF73;
        --gray: #909090
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

    label {
        margin-bottom: 25px;
    }

    input {
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #CECED0;
        border-radius: 8px;
        opacity: 1;
        width: 302px;
        height: 40px;

        ::placeholder {
        text-align: left;
        font: normal normal 300 18px/24px Open Sans;
        letter-spacing: -0.27px;
        color: #939393;
        padding-left: 10px;
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
