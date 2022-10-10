import styled from 'styled-components';

const CssStyle = styled.main`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
    * {
        margin: 0;
        padding: 0;
    }
    body {
        height: 100vh;
        width: 100vw;
        background-color: #fbf8f1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 20vmin;
        line-height: 20vmin;
        text-align: center;
    }
    .gradient-text {
        color: transparent;
        background: conic-gradient(
            #d9d7f1 12%,
            #baabda 12%,
            #baabda 33%,
            #e7fbbe 33%,
            #e7fbbe 55%,
            #ffcbcb 55%,
            #ffcbcb 70%,
            #b5deff 70%,
            #b5deff 87%,
            #f7d1ba 87%
        );
        background-size: 50%;
        background-clip: text;
        -webkit-background-clip: text;
        animation: expand-rev 0.5s ease forwards;
        cursor: pointer;
    }
    .gradient-text:hover {
        animation: expand 0.5s ease forwards;
    }
    @keyframes expand {
        0% {
            background-size: 50%;
            background-position: 0 0;
        }
        20% {
            background-size: 55%;
            background-position: 0 1em;
        }
        100% {
            background-size: 325%;
            background-position: -10em -4em;
        }
    }
    @keyframes expand-rev {
        0% {
            background-size: 325%;
            background-position: -10em -4em;
        }
        20% {
            background-size: 55%;
            background-position: 0 1em;
        }
        100% {
            background-size: 50%;
            background-position: 0 0;
        }
    }
`;
export default CssStyle;