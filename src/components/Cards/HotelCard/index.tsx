import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import { TiStar } from 'react-icons/ti';
import { IoTrailSignOutline, IoCardOutline } from 'react-icons/io5';

import { theme } from '../../../styles/theme';
import { IHotel } from '../../../types/main';
import { CardContainer, CardFooter, CardFooterItem, CardTitle } from '../styles';



const HotelCard: React.FC<IHotel> = ({ title, ratings, kmFromCityCenter, averageDayPrice, featuredImageURL, hotelURL }) => {
    return (
        <CardContainer>

            <Link href={`${hotelURL}`}>

                <Image src={featuredImageURL} width={460} height={300} alt={title} />

            </Link>

            <CardTitle>

                <Link href={`${hotelURL}`}>

                    {title}

                </Link>

            </CardTitle>

            <CardFooter>

                <CardFooterItem><TiStar color='#fdbc31' size={25} />{ratings}</CardFooterItem>

                <CardFooterItem><IoTrailSignOutline color={theme.colors.lightGray} size={25} />{kmFromCityCenter}&nbsp;χλμ από το κέντρο</CardFooterItem>

                <CardFooterItem><IoCardOutline color={theme.colors.lightGray} size={25} />Μέση τιμή: {averageDayPrice} &euro;</CardFooterItem>

            </CardFooter>

        </CardContainer>

    )
}

export default HotelCard