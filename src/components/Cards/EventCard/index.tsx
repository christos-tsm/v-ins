import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { IoCalendarOutline, IoLocationOutline } from 'react-icons/io5';

import { IEvent } from '../../../types/main'
import { CardContainer, CardFooter, CardFooterItem, CardTitle } from '../styles';

const EventCard: React.FC<IEvent> = ({ title, eventDate, location, featuredImageURL, eventPageURL }) => {
    return (
        <CardContainer>

            <Link href={eventPageURL}>

                <Image src={featuredImageURL} alt={title} width={500} height={200} />

            </Link>

            <CardTitle>

                <Link href={eventPageURL}>{title}</Link>

            </CardTitle>

            <CardFooter>

                <CardFooterItem>

                    <IoCalendarOutline size={18} />

                    {eventDate}

                </CardFooterItem>

                <CardFooterItem>

                    <IoLocationOutline size={18} />

                    {location}

                </CardFooterItem>

            </CardFooter>



        </CardContainer>
    )
}

export default EventCard