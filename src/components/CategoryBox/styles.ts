import styled from "styled-components";
import { theme } from "../../styles/theme";

export const BoxTitle = styled.h3`
    font-size: 18px;
    a,
    span {
        padding: 20px 35px;
        cursor: pointer; 
        transition: all ease-in-out 250ms;
        display: flex;
        align-items: center;
        gap: 20px;
        border-radius: 15px;
        box-shadow: 0 .125rem .5rem -.25rem #1f1b2d1f,0 .25rem 1rem #1f1b2d1f;

        &:hover {
            background-color: ${theme.colors.primary};
            color: #fff;
        }

    }
`;

export const BoxContainer = styled.div`
    display: flex;
    /* padding: 20px 35px; */
`;
