import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { IoCalendarOutline } from 'react-icons/io5'
import { IPost } from '../../../types/main'
import { CardContainer, CardTitle, CardFooter, CardFooterItem, CardContainerRow, CardImageContainerRow, CardContentContainerRow, CardText } from '../styles'

const PostCard: React.FC<IPost> = ({ title, content, created_at, postURL, featuredImageURL }) => {
    return (
        <CardContainerRow>

            <CardImageContainerRow>

                <Link href={postURL}>

                    <Image src={featuredImageURL} alt={title} width={500} height={280} />

                </Link>

            </CardImageContainerRow>

            <CardContentContainerRow>

                <CardTitle>

                    <Link href={postURL}>{title}</Link>

                </CardTitle>

                <CardText expand>{content}</CardText>

                <CardFooter>

                    <CardFooterItem>

                        <IoCalendarOutline size={18} />

                        {created_at}

                    </CardFooterItem>

                </CardFooter>

            </CardContentContainerRow>

        </CardContainerRow>
    )
}

export default PostCard