import styled from "styled-components";

export const AppContainer = styled.div`
    display: flex;
`;

export const AppSidebarContainer = styled.aside`
    max-width: 270px;
    width: 270px;
    border-right: 1px solid #f5f5f5;
`;

export const AppMain = styled.main`
    flex: 1;
    height: 100vh;
    overflow-y: scroll;
    padding: 10px 20px;
`;
