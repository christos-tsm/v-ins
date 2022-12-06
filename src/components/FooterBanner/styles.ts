import styled from "styled-components";
import { theme } from "../../styles/theme";

export const FooterBannerContainer = styled.section`
    display: grid;
    place-items: center;
    background-color: ${theme.colors.primary};
    min-height: 350px;
`;

export const FooterBannerContent = styled.div``;

export const FooterBannerTitle = styled.h5`
    color: #fff;
    font-size: 35px;
    margin-bottom: 20px;
`;

export const FooterBannerSubtitle = styled.h6`
    color: #fff;
    font-size: 20px;
`;