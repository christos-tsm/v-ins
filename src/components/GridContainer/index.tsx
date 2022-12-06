import React from 'react'
import { PropsChildren } from '../../types/main'
import { Grid } from './styles'

const GridContainer = ({ children, columns, columnWidth, gap }: { children: React.ReactNode, columns: number, gap: number, columnWidth: number | '1fr' | '100%' }) => {
    return (
        <Grid columns={columns} columnWidth={columnWidth} gap={gap}>{children}</Grid>
    )
}

export default GridContainer