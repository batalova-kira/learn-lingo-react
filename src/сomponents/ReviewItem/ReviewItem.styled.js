import styled from "styled-components";
import { RxAvatar } from "react-icons/rx";

export const WrapperAvatar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
`;

export const ReviewAvatar = styled(RxAvatar)`
    width: 44px;
    height: 44px;
    color: ${(props) => props.theme.colors.black};
`;

export const ReviewName = styled.h4`
    margin-bottom: 2px;
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.5;
    color: ${(props) => props.theme.colors.grey};
`;

export const WrapperReviewRating = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`;

export const ReviewRating = styled.p`
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    font-size: 14px;
    line-height: 1.29;
    color: ${(props) => props.theme.colors.black};
`;

export const ReviewComment = styled.p`
    margin-bottom: 32px;

    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.5;
    color: ${(props) => props.theme.colors.black};
`;
