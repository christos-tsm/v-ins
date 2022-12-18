import styled from "styled-components";
import { theme } from "../../styles/theme";

export const NavigationContainer = styled.header`
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    width: 1480px;
    z-index: 90;
    /* box-shadow: 0 0.125rem 0.5rem -0.25rem #fff, 0 0.25rem 1rem #fff; */
    box-shadow: 0 0 0 0 transparent;
    transition: all ease-in-out 250ms;
`;

export const MenuUL = styled.ul`
    display: flex;
    gap: 40px;
`;

export const ItemList = styled.li`
    display: flex;
    align-items: center;
    a {
        font-size: 16px;
        transition: all 250ms ease-in-out;
        color: ${theme.colors.black};
        &:hover {
            color: ${theme.colors.primary};
        }
    }
`;

export const ItemListButton = styled.li`
    display: flex;

    button,
    a {
        background-color: ${theme.colors.primary};
        color: #fff;
        padding: 5px 15px;
        border-radius: 12px;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all 250ms ease-in-out;
        font-size: 16px;
        height: 35px;
        display: grid;
        place-content: center;

        &:hover {
            border-radius: 0;
        }
    }
`;
