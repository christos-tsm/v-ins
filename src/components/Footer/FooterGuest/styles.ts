import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const FooterGuestContainer = styled.footer`
    background-color: ${theme.colors.black};
    padding: 50px 0 0;
`;

export const FooterColumns = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    width: 1480px;
    margin: auto;
`;

export const FooterColumnSingle = styled.div`
    color: #fff;
`;

export const FooterTitle = styled.h6`
    font-size: 20px;
    margin-bottom: 25px;
`;

export const FooterUL = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const FooterLI = styled.li`
    font-size: 16px;
    a {
       font-size: 16px;
       color: #fff;
    }
`;

export const FooterIconContainer = styled.div`
    display: flex;
    gap: 15px;
`;

export const FooterIconLink = styled.a`
    display: flex;
`;

export const Copyrights = styled.div`
    p {
        text-align: center;
        padding: 10px 0;
        background: #3c3c45;
        margin-top: 100px;
        font-size: 13px;
        color: #f2f1f1;
    }
`;