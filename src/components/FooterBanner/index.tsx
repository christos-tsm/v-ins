import { useUser } from "@supabase/auth-helpers-react";
import Link from "next/link";
import React from "react";
import { Button, LinkContainer } from "../../styles/general";
import { FooterBannerContainer, FooterBannerContent, FooterBannerSubtitle, FooterBannerTitle } from "./styles";

const FooterBanner = () => {
    const user = useUser();

    return (
        <FooterBannerContainer>
            <FooterBannerContent>
                <FooterBannerTitle>{user ? "Ξεκίνα την αναζήτηση!" : "Συνδέσου τώρα, και ξεκίνα την αναζήτηση!"}</FooterBannerTitle>

                <LinkContainer centered>
                    <Link href="/auth">Είσοδος στην πλατφόρμα</Link>
                </LinkContainer>
            </FooterBannerContent>
        </FooterBannerContainer>
    );
};

export default FooterBanner;
