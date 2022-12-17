import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const SidebarContent = styled.nav``;

export const SidebarLogoContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px;
`;

export const SidebarMenuContainer = styled.ul``;

export const SidebarMenuItem = styled.li`
    a {
        padding: 20px;
        transition: all ease-in-out 250ms;
        display: flex;
        align-items: center;
        gap: 4px;
        &:hover {
            color: ${theme.colors.primary};
        }
    }
`;
