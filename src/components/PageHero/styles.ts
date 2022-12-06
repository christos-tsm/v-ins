import styled from 'styled-components';
import { theme } from '../../styles/theme';


export const HeroContainer = styled.article`
    display: flex;
    padding: 300px 0 0;
    position: relative;
    align-items: center;
    max-width: 100%;
    width: 1480px;
    margin: 0 auto;
`;

export const HeroContent = styled.div`
    max-width: 700px;
    h1 {
        margin-bottom: 30px;
    }
`;

export const HeroImage = styled.div`
    position: relative;

    .__intro-image {
        display: flex;
    }

    .__texture {
        position: absolute;
        top: -100px;
        right: -110px;
        z-index: -1;
        display: flex;
    }
`;

export const HeroTexture = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: ${theme.colors.primary};
    opacity: .7;
`;

