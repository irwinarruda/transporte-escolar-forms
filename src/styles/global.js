import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --font-primary: 'Roboto', sans-serif;
        --font-secondary: 'Lora', serif;
        --color-white: #FFFFFF;
        --color-black: #1E1900;
        --color-grey: #CDCDCD;
        --color-yellow: #FBCF02;
        --color-light-yellow: #FFEB8E;
        --color-bg-yellow: #FFFDF4;
        --color-blue: #5E7B9E;
        --color-dark-blue: #536780;
        --color-red: #FF6161;
        --padding-mobile: 24px;
        --margin-mobile: 15px;
        --content-block-width: 635px;
        /*
        --color-darker-white: #F4F4F4;
        --color-bg-white: #FAFAFA;
        --color-white: #FFFFFF;
        --color-grey-text: #808590;
        --color-bg-grey: #818181;
        --color-dark-grey: #E5E5E5;
        --color-grey: #6B6B6B;
        --color-black: #383A3A; */
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    ol, ul {
        list-style: none;
    }
    body, html, #__next {
        width: 100%;
        height: 100%;
        font-family: var(--font-primary);
        background-color: var(--color-bg-yellow);
    }

    #__next {
        padding-top: 15px;
    }

    h1, h2, h3, h4, h5 {
        color: var(--color-black);
    }

    h1 {
        font-size: 32px;
    }

    h2 {
        font-size: 24px;
    }

    h3 {
        font-size: 18px;
    }

    button {
        outline: none;
        font-family: var(--font-primary);
        cursor: pointer;
    }

    a {
        cursor: pointer;
        text-decoration: none;
    }
`;
