import Link from 'next/link'
import React from 'react'
import { Button, LinkContainer } from '../../styles/general'
import { FooterBannerContainer, FooterBannerContent, FooterBannerSubtitle, FooterBannerTitle } from './styles'

const FooterBanner = () => {
    return (
        <FooterBannerContainer>

            <FooterBannerContent>

                <FooterBannerTitle>Κάνε την εγγραφή σου τώρα, και ξεκίνα την αναζήτηση!</FooterBannerTitle>

                <LinkContainer centered>

                    <Link href='/auth'>Εγγραφή</Link>

                </LinkContainer>

            </FooterBannerContent>

        </FooterBannerContainer>
    )
}

export default FooterBanner