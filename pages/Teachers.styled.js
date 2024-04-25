import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const TeachersList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 64px;
`;

export const BtnMainLoadMore = styled.button`
    margin-right: auto;
    margin-left: auto;
    padding: 16px 48px;

    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    font-size: 18px;
    line-height: 1.56;

    border-radius: 12px;

    color: ${(props) => props.theme.colors.black};
    background: ${(props) => props.theme.colors.pink};

    &:hover {
        cursor: pointer;
        background: ${(p) => p.theme.colors.lightPink};
    }
`;

export const WrapperFavoriteEmpty = styled.div`
    display: flex;
    margin-right: auto;
    margin-left: auto;
    padding: 40px 100px;
`;
export const TextFavoriteEmpty = styled.p`
    width: 100%;
    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
    font-size: 20px;
    line-height: 1.37;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.black};
`;

export const StyledFavoriteLink = styled(NavLink)`
    display: flex;
    gap: 8px;
    align-items: center;
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    font-size: 20px;
    line-height: 1.25;
    color: ${(props) => props.theme.colors.pink};
    text-decoration: none;

    &:hover {
        cursor: pointer;

        color: ${(props) => props.theme.colors.lightPink};
        border-radius: 5px;
    }
`;
