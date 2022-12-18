import Head from "next/head";
import React from "react";
import { PropsChildren } from "../../../types/main";
import FooterGuest from "../../Footer/FooterGuest";
import Navigation from "../../Navigation";
import { LayoutMain } from "./styles";

const Layout: React.FC<PropsChildren> = ({ children }) => {
    return (
        <>
            <Navigation />
            <LayoutMain>{children}</LayoutMain>
            <FooterGuest />
        </>
    );
};

export default Layout;
