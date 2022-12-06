import styled from "styled-components";
import { theme } from "./theme";

type FlexTypes = {
    jContent?: 'space-between' | 'center' | 'flex-end'
    aItems?: 'center' | 'flex-end' | 'baseline'
    column?: boolean
    reversed?: boolean
    gap?: number
}

type SectionTypes = {
    margin?: string
    padding?: string
}

type LinkContainerTypes = {
    primary?: boolean
    centered?: boolean
}

export const Button = styled.button`
    outline: none;
    border: none;
   
    a {
        display: inline-flex;
        background-color: ${theme.colors.primary};
        color: #fff;
        border-radius: 12px;
        padding: 12px 20px;
        color: #fff;
        transition: all ease-in-out 250ms;
        &:hover {
            border-radius: 0;
        }
    }
`;

export const Section = styled.section`
    max-width: 100%;
    width: 1480px;
    position: relative;
    margin: ${({ margin }: SectionTypes) => margin ? margin : '0 auto'} ;
    padding: ${({ padding }: SectionTypes) => padding ? padding : '0 auto'};  
`;

export const FlexContainer = styled.div`
    display: flex;
    justify-content: ${({ jContent }: FlexTypes) => jContent ? jContent : 'flex-start'};
    flex-direction: ${({ reversed }: FlexTypes) => reversed ? 'row-reverse' : 'row'};
    gap: ${({ gap }: FlexTypes) => gap ? `${gap}px` : '0px'};
    align-items: ${({ aItems }: FlexTypes) => aItems ? aItems : 'flex-start'};
`;


export const LinkContainer = styled.div`
    & > a {
        display: flex;
        background-color: ${({ primary }: LinkContainerTypes) => primary ? theme.colors.primary : '#fff'};
        color: ${({ primary }: LinkContainerTypes) => primary ? '#fff' : theme.colors.primary};
        padding: 15px 25px;
        border-radius: 12px;
        margin: ${({ centered }: LinkContainerTypes) => centered ? 'auto' : '0'};
        max-width: fit-content;
        transition: all ease-in-out 250ms;
        &:hover {
            border-radius: 0;
        }
    }
`;

export const BGLight = styled.div`
    background-color: #f5f5f5;
    margin: ${({ marginY }: { marginY?: string }) => marginY ? `${marginY} 0px` : '0'};
`;