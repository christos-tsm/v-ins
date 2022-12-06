import styled from 'styled-components';
import { theme } from './theme';

type FontProperties = {
    xl?: boolean;
    mb?: number;
    black?: boolean;
    capitalize?: boolean;
}

export const Header = styled.h1`
    font-size: ${({ xl }: FontProperties) => xl ? '60px' : '30px'};
    line-height: ${({ xl }: FontProperties) => xl ? '70px' : '45px'};
    font-weight: 500;
`;

export const SubHeader = styled.h3`
    font-size: ${({ xl }: FontProperties) => xl ? '25px' : '18px'};
    line-height: ${({ xl }: FontProperties) => xl ? '25px' : '18px'};
    color: ${({ black }: FontProperties) => black ? theme.colors.black : theme.colors.primary};
    text-transform: ${({ capitalize }: FontProperties) => capitalize ? 'capitalize' : 'uppercase'};
    margin-bottom: ${({ mb }: FontProperties) => mb ? `${mb}px` : '0'};
`;

export const Paragraph = styled.p`
    font-size: 16px;
    line-height: 25px;
    margin-bottom: ${({ mb }: FontProperties) => mb ? `${mb}px` : '0'};

    a {
        font-weight: 600;
        color: ${theme.colors.primary};
    }
`;
