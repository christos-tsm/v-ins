import React from "react";
import Sidebar from "../../App/Sidebar";
import { AppContainer, AppMain, AppSidebarContainer } from "./styles";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <AppContainer>
            <AppSidebarContainer>
                <Sidebar />
            </AppSidebarContainer>
            <AppMain>{children}</AppMain>
        </AppContainer>
    );
};

export default AppLayout;
