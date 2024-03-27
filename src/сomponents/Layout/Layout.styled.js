import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    width: 1440px;
    padding: 50px;
`;

export const Header = styled.header`
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 40px;
`;

export const StyledNavLink = styled(NavLink)`
    display: inline-block;
    vertical-align: top;
    width: 100px;
    height: 34px;
    line-height: 36px;
    text-transform: uppercase;
    text-decoration: none;
    color: #121417;
    letter-spacing: 0.1em;
    text-align: center;
    font-size: 0.8rem;
    margin: 10px;
    position: relative;
    text-decoration: none;

    transition: all 0.3s linear;

    &:hover {
        cursor: pointer;
        background: #e0a39a;
        color: #fff;
        /* box-shadow: 0px 2px 5px 3px #97b1bf; */
    }
`;
