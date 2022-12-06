import React from 'react'
import { SubHeader } from '../../styles/typography'
import { PromotionBannerContainer, PromotionBannerDescription, PromotionBannerHeaderContainer, PromotionBannerPhone, PromotionBannerSVGContainer } from './styles'

interface IPromotionBanner {
    title: string,
    titleIcon?: React.ReactNode,
    phone?: string,
    description: string,
    svg: React.ReactNode,
    minHeight?: number | 'auto',
    width?: number | 'auto'
}

const PromotionBanner: React.FC<IPromotionBanner> = ({ title, phone, titleIcon, description, svg, minHeight, width }) => {

    return (
        <PromotionBannerContainer minHeight={minHeight} width={width}>

            <PromotionBannerHeaderContainer>

                <SubHeader capitalize black xl mb={40}>{titleIcon} {title} <PromotionBannerPhone>{phone}</PromotionBannerPhone> </SubHeader>

                <PromotionBannerDescription>{description}</PromotionBannerDescription>

            </PromotionBannerHeaderContainer>

            <PromotionBannerSVGContainer>
                {svg}
            </PromotionBannerSVGContainer>

        </PromotionBannerContainer>
    )
}

export default PromotionBanner