import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --green: #9ECF73;
        --gray: #3D3D3D
    }

    body {
        background-color: ${({ isProtected }) => (isProtected ? 'var(--green)' : 'white')};
        font-family: Open Sans; 
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
        justify-content: flex-end;
        align-items: center;
        position: relative;
        margin-right: 20px;
        animation: fadein 0.8s;

        @keyframes fadein {
            from {
                opacity: 0;
                left: 400px;
            }
            to {
                opacity: 1;
                left: 0px;
            }
        }
    }

    .main-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        animation: fade 1.3s ease-out 0.3s backwards;

        @keyframes fade {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    }

    .burger {
        div {
            background: ${({ isProtected }) => (isProtected ? 'white' : '#CECED0')};
        }
    }

    #text-logo {
        color: ${({ isProtected }) => (isProtected ? 'white' : 'var(--green)')};
    }

    .icon-wrapper {
        color: ${({ isProtected }) => (isProtected ? 'white' : 'lightgrey')};
        :hover {
            color: ${({ isProtected }) => (isProtected ? 'white' : '#333333')};
        }
        @media(max-width: 420px) {
            :hover {
                color: ${({ isProtected }) => (isProtected ? 'white' : 'lightgrey')};
            }
        }
    }

    @media(max-width: 700px) {
        .container {
            display: flex;
            justify-content: center;
        }

        .main-wrapper {
            animation: none;
        }

        .logo-wrapper {
            display: none;
        }
    }
`;
export default GlobalStyles;
