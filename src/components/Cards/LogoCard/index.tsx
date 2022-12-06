import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TiStar } from 'react-icons/ti';
import { IoTrailSignOutline, IoCardOutline } from 'react-icons/io5';

import { IRestaurant } from '../../../types/main';
import { LogoCardContainer, LogoCardContentContainer, LogoCardImageContainer, LogoCardLI, LogoCardTitle, LogoCardUL } from './styles';
import { theme } from '../../../styles/theme';


const LogoCard: React.FC<IRestaurant> = ({ title, address, featuredImageURL, ratings, restaurantURL }) => {
    return (
        <LogoCardContainer>

            <LogoCardImageContainer>

                <Link href={restaurantURL}>

                    <Image src={featuredImageURL} width={100} height={100} alt={title} />

                </Link>

            </LogoCardImageContainer>

            <LogoCardContentContainer>

                <LogoCardTitle>{title}</LogoCardTitle>

                <LogoCardUL>

                    <LogoCardLI><TiStar color='#fdbc31' size={25} />{ratings}</LogoCardLI>

                    <LogoCardLI><IoTrailSignOutline color={theme.colors.lightGray} size={25} />{address}</LogoCardLI>

                </LogoCardUL>

            </LogoCardContentContainer>

        </LogoCardContainer>
    )
}

export default LogoCard