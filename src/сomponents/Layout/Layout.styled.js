import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

export const Container = styled.div`
    max-width: 11840px;
    padding: 20px 128px 0px 128px;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const LogoText = styled.span`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: #121417;
`;

export const PagesWrapper = styled.div`
    display: flex;
    margin-left: auto;
    /* margin-right: auto; */
    gap: 28px;
`;
export const StyledNavLink = styled(NavLink)`
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    color: #121417;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        color: #e0a39a;
    }
`;

export const AuthWrapper = styled.div`
    display: flex;
    margin-left: auto;
    gap: 16px;
`;

export const StyledAuthLink = styled(NavLink)`
    display: flex;
    gap: 8px;
    align-items: center;
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;
    color: #121417;
    text-decoration: none;

    &:hover {
        cursor: pointer;

        color: #e0a39a;
        border-radius: 5px;
    }
`;
export const StyledRegistrationLink = styled(NavLink)`
    border-radius: 12px;
    padding: 14px 39px;
    width: 166px;
    height: 48px;
    background: #121417;
    text-decoration: none;
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 16px;
    line-height: 125%;
    color: #fff;

    &:hover {
        cursor: pointer;
        background: #e0a39a;
        color: #fff;
    }
`;

export const LogOutBtn = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    border: none;
    background: none;
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;
    color: #121417;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        color: #e0a39a;
    }
`;

export const BtnLogOut = styled(BiLogOut)`
    stroke: #e0a39a;
    font-size: 1.2rem;
    &:hover {
        cursor: pointer;
    }
`;

export const NameText = styled.span`
    font-style: italic;
`;
