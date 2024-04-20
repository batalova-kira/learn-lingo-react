import styled from "styled-components";

export const WrapperCard = styled.div`
    display: flex;
    /* gap: 48px; */

    max-width: 1184px;
    padding: 24px;

    border-radius: 24px;
    background-color: ${(props) => props.theme.colors.background};
`;

export const WrapperAvatar = styled.div`
    display: block;
    position: relative;
    margin-right: 48px;
`;

export const Avatar = styled.img`
    width: 144px;
    height: 120px;
    padding: 9px;
    border-radius: 100px;
    border: 3px solid ${(props) => props.theme.colors.pink};
    background-color: ${(props) => props.theme.colors.background};
`;

export const AvatarIcon = styled.img`
    top: 20px;
    left: 92px;
    position: absolute;
`;
