import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        color: ${theme.colors.black};
        text-decoration: none;
        font-size: 16px;
    }

    body {
        font-family: 'Manrope', Verdana, sans-serif;
        font-size: 16px;
        color: ${theme.colors.black};
    }

    ul {
        list-style: none;
    }

    .__container {
        max-width: 100%;
        width: 1620px;
        margin: auto;
    }

    .swiper-pagination {
        display: flex;
        justify-content: center;
        gap: 15px;
    }

    .swiper-pagination-bullet {
        background: ${theme.colors.lightGray};
        width: 10px;
        height: 10px;
    }

    .swiper-pagination-bullet-active {
        background: ${theme.colors.primary};
    }

    .__1-2--flex {
        div:last-child {
            flex: 1;
        }
    }

    #nprogress .bar {
        background: ${theme.colors.primary}
    }

`;