import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

export const WrapperHeaderCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8px;
`;

export const WrapperName = styled.div`
    /* margin-right: auto; */
`;

export const WrapperHeaderDesc = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const HeaderLanguages = styled.p`
    margin-bottom: 8px;
    font-family: var(--font-family);
    font-weight: var(--font-weight-medium);
    font-size: 16px;
    line-height: 150%;
    color: ${(props) => props.theme.colors.grey};
`;

export const HeaderName = styled.p`
    font-family: var(--font-family);
    font-weight: var(--font-weight-medium);
    font-size: 24px;
    line-height: 100%;
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 32px;
`;

export const WrapperTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    /* justify-content: flex-end; */
`;

export const TitleText = styled.p`
    margin-right: 16px;
    font-family: var(--font-family);
    font-weight: var(--font-weight-medium);
    font-size: 16px;
    line-height: 1.5;
    color: ${(props) => props.theme.colors.black};
`;

export const TitleIcon = styled.img`
    padding-top: 4px;
    margin-right: 4px;
`;
export const TitleSpan = styled.span`
    margin-right: 16px;
    color: ${(props) => props.theme.colors.spanGrey};
`;

export const TitleSpanAccent = styled.span`
    margin-right: 48px;
    color: ${(props) => props.theme.colors.green};
`;

export const HeartBtn = styled.button`
    border: none;
    background: none;
`;

export const HeartIcon = styled(FaRegHeart)`
    font-size: 22px;
    color: ${(props) => props.theme.colors.black};
    cursor: pointer;
    background: transparent;
    transition: all 0.3s ease-in-out;

    &:hover {
        color: ${(props) => props.theme.colors.pink};
    }
`;

export const HeartFullIcon = styled(FaHeart)`
    font-size: 22px;
    color: ${(props) => props.theme.colors.black};
    cursor: pointer;

    transition: all 0.3s ease-in-out;

    &:hover {
        color: ${(props) => props.theme.colors.pink};
    }
`;
