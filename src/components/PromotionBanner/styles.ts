import styled from 'styled-components';
import { theme } from '../../styles/theme';

type PromotionBannerTypes = {
    minHeight?: number | 'auto',
    width?: number | 'auto'
}

export const PromotionBannerContainer = styled.article`
    display: flex;
    flex-direction: column;
    padding: 0;
    border-radius: 15px;
    justify-content: space-around;
    background-color: ${theme.colors.primaryLighten};
    min-height: ${({ minHeight }: PromotionBannerTypes) => `${minHeight}px`};
    width: ${({ width }: PromotionBannerTypes) => width};

`;

export const PromotionBannerHeaderContainer = styled.header`
    margin-left: 40px;
    h3 {
        margin-bottom: 10px;
        display: flex;
        gap: 10px;
        align-items: center;
        color: ${theme.colors.primary};
    }
`;

export const PromotionBannerPhone = styled.span`
    color: ${theme.colors.black};
`;

export const PromotionBannerDescription = styled.p`
    font-size: 16px;
    margin-bottom: 15px;
`;

export const PromotionBannerSVGContainer = styled.span`
    display: flex;
    padding: 0 20px;

    svg {
        width: 100%;
        height: 100%;
    }
`;