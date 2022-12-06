import styled from "styled-components";
import { theme } from "../../styles/theme";

type RowCardTypes = {
    expand?: boolean
}

export const CardContainer = styled.article`
    margin-bottom: 120px; // Margin bottom to push swiper dots
    & > a {
        display: flex;
        max-width: 100%;
        overflow: hidden;
        border-radius: 12px;

        img {
            width: 100%;
            height: auto;
        }
    }
`;

export const CardTitle = styled.h3`
    font-size: 20px;
    margin: 10px 0;
    a {
        font-weight: 600;
        font-size: 20px;
    }
`;

export const CardFooter = styled.ul`
    display: flex;
    gap: 35px;
    align-items: center;
`;

export const CardText = styled.p`
    font-size: 16px;
    color: ${theme.colors.black};
    margin: 10px 0;
    flex: ${({ expand }: RowCardTypes) => expand ? 1 : 'unset'};
`;

export const CardFooterItem = styled.li`
    display: flex;
    align-items: center;
    font-size: 14px;
    gap: 8px;
    color: ${theme.colors.lightGray};
`;

export const CardContainerRow = styled.article`
    display: flex;
    margin-bottom: 120px;
`;

export const CardImageContainerRow = styled.div`
    flex: 1;
    max-width: 500px;

    & > a {
        display: flex;
    }
`;

export const CardContentContainerRow = styled.div`
    flex: 1;
    padding: 0 20px;
    display: flex;
    flex-direction: column;

    h3 {
        margin:  0 0 10px;
    }
`;

