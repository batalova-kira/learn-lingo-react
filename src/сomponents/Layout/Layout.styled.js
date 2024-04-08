import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    max-width: 1440px;
    padding: 50px;
`;

export const Header = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const PagesWrapper = styled.div`
    display: flex;

    gap: 16px;
`;
export const StyledNavLink = styled(NavLink)`
    display: inline-block;

    padding: 8px;

    text-transform: uppercase;
    text-decoration: none;
    color: #121417;
    letter-spacing: 0.1em;
    text-align: center;
    font-size: 0.8rem;
    text-decoration: none;

    transition: all 0.3s linear;

    &:hover {
        cursor: pointer;
        background: #e0a39a;
        color: #fff;
        /* box-shadow: 0px 2px 5px 3px #97b1bf; */
    }
`;

export const AuthWrapper = styled.div`
    display: flex;
    margin-left: auto;
    gap: 14px;
`;

export const LogoWrapper = styled.div``;
