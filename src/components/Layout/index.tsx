import React from 'react'
import { PropsChildren } from '../../types/main'
import FooterGuest from '../Footer/FooterGuest'
import { LayoutContainer } from './styles'

const Layout: React.FC<PropsChildren> = ({ children }) => {
    return (
        <LayoutContainer>
            {children}
            <FooterGuest />
        </LayoutContainer>
    )
}

export default Layout   