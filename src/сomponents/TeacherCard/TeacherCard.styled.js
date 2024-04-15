import styled from "styled-components";

export const WrapperCard = styled.div`
    display: flex;
    gap: 48px;

    max-width: 1184px;
    padding: 24px;

    border-radius: 24px;
    background-color: ${(props) => props.theme.colors.background};
`;

export const WrapperAvatar = styled.div`
    position: relative;
`;

export const Avatar = styled.img`
    width: 120px;
    height: 120px;
    padding: 9px;
    border-radius: 100px;
    border: 3px solid ${(props) => props.theme.colors.pink};
    background-color: ${(props) => props.theme.colors.background};
`;

export const AvatarIcon = styled.img`
    top: 20px;
    left: 87px;
    position: absolute;
`;
