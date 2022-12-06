import styled from "styled-components";

type GridType = {
    columns: number;
    columnWidth: number | '1fr' | '100%';
    gap?: number;
}

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(${({ columns }: GridType) => columns}, ${({ columnWidth }: GridType) => columnWidth});
    gap: ${({ gap }: GridType) => gap ? `${gap}px` : '0px'}
`;