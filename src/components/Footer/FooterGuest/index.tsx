import React from 'react'
import Link from 'next/link'

import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { IoLogoTiktok } from 'react-icons/io5';

import { Copyrights, FooterColumns, FooterColumnSingle, FooterGuestContainer, FooterIconContainer, FooterIconLink, FooterLI, FooterTitle, FooterUL } from './styles'

const FooterGuest = () => {
    return (
        <FooterGuestContainer>
            <FooterColumns>

                <FooterColumnSingle>

                    <FooterTitle>Νομικά</FooterTitle>

                    <FooterUL>

                        <FooterLI>

                            <Link href={'/'}>Πολιτική Απορρήτου</Link>

                        </FooterLI>

                        <FooterLI>

                            <Link href={'/'}>Όροι χρήσης</Link>

                        </FooterLI>

                        <FooterLI>

                            <Link href={'/'}>Όροι εγγραφής</Link>

                        </FooterLI>

                        <FooterLI>

                            <Link href={'/'}>Cookies</Link>

                        </FooterLI>

                    </FooterUL>

                </FooterColumnSingle>

                <FooterColumnSingle>

                    <FooterTitle>Λογαριασμός</FooterTitle>

                    <FooterUL>

                        <FooterLI>

                            <Link href={'/'}>Σύνδεση</Link>

                        </FooterLI>

                        <FooterLI>

                            <Link href={'/'}>Εγγραφή</Link>

                        </FooterLI>

                        <FooterLI>

                            <Link href={'/'}>Επαγγελματικός Λογαριασμός</Link>

                        </FooterLI>

                    </FooterUL>

                </FooterColumnSingle>

                <FooterColumnSingle>

                    <FooterTitle>Μενού</FooterTitle>

                    <FooterUL>

                        <FooterLI>

                            <Link href={'/'}>Πολιτική Απορρήτου</Link>

                        </FooterLI>

                        <FooterLI>

                            <Link href={'/'}>Όροι χρήσης</Link>

                        </FooterLI>

                        <FooterLI>

                            <Link href={'/'}>Όροι εγγραφής</Link>

                        </FooterLI>

                        <FooterLI>

                            <Link href={'/'}>Cookies</Link>

                        </FooterLI>

                    </FooterUL>

                </FooterColumnSingle>

                <FooterColumnSingle>

                    <FooterTitle>Social Media</FooterTitle>

                    <FooterIconContainer>

                        <FooterIconLink href="#!">

                            <AiOutlineFacebook size={32} color={'#fff'} />

                        </FooterIconLink>

                        <FooterIconLink href="#!">

                            <AiOutlineInstagram size={32} color={'#fff'} />

                        </FooterIconLink>

                        <FooterIconLink href="#!">

                            <IoLogoTiktok size={32} color={'#fff'} />

                        </FooterIconLink>

                    </FooterIconContainer>

                </FooterColumnSingle>

            </FooterColumns>

            <Copyrights>
                <p>&copy; 2022 - All rights reserved  </p>
            </Copyrights>

        </FooterGuestContainer>
    )
}

export default FooterGuest