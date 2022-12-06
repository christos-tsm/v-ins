import Link from "next/link";
import React from "react";

import { HeroContainer, HeroContent, HeroImage } from "./styles";
import { Button, LinkContainer } from "../../styles/general";
import { SubHeader, Header, Paragraph } from "../../styles/typography";
import { IPageHero } from "../../types/main";
// import DefaultImage from '../../assets/intro.svg';
import DefaultImage from "../../assets/intro-image.svg";
import Texture from "../../assets/texture.svg";

const PageHero = ({ header, subheader, paragraph, cta }: IPageHero) => {
    return (
        <HeroContainer>
            <HeroContent>
                <SubHeader mb={8}>{header}</SubHeader>

                <Header xl>{subheader}</Header>

                <Paragraph mb={20}>{paragraph}</Paragraph>
                {cta && (
                    <LinkContainer primary>
                        <Link href={"/auth"}>{cta}</Link>
                    </LinkContainer>
                )}
            </HeroContent>

            <HeroImage>
                <span className="__intro-image">
                    <DefaultImage />
                </span>

                <span className="__texture">
                    <Texture />
                </span>
            </HeroImage>
        </HeroContainer>
    );
};

export default PageHero;
