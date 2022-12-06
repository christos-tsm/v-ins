import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const LogoCardContainer = styled.div`
    display: flex;
    gap: 15px;
`;

export const LogoCardImageContainer = styled.div`
    & > a {
        display: flex;
        overflow: hidden;
        border-radius: 12px;
    }
`;

export const LogoCardContentContainer = styled.div`
`;

export const LogoCardTitle = styled.h4``;

export const LogoCardUL = styled.ul``;

export const LogoCardLI = styled.li`
    display: flex;
    gap: 5px;
    font-size: 13px;
    align-items: center;
    color: ${theme.colors.lightGray};
    text-transform: capitalize;
    &:not(:last-child) {
        margin: 10px 0;
    }
`;