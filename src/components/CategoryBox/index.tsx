import Link from 'next/link'
import React from 'react'
import { BoxContainer, BoxTitle } from './styles'

const InfoBox = ({ title, icon, url }: { title: string, icon?: React.ReactNode, url?: string }) => {
    return (
        <BoxContainer>
            <BoxTitle>
                {
                    url ?
                        <Link href={`${url}`}>
                            {icon && icon}
                            {title}
                        </Link>
                        :
                        <span>{icon && icon} {title}</span>
                }

            </BoxTitle>
        </BoxContainer>
    )
}

export default InfoBox