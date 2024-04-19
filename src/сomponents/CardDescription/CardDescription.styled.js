import styled from "styled-components";

export const DescWrapper = styled.div`
    margin-bottom: 16px;
`;

export const DescAccent = styled.span`
    color: ${(props) => props.theme.colors.black};
`;

export const BtnLoadMore = styled.button`
    display: block;
    align-self: flex-start;

    font-family: var(--font-family);
    font-weight: var(--font-weight-medium);
    font-size: 16px;
    line-height: 150%;
    text-decoration: underline;
    text-decoration-skip-ink: none;

    border: none;
    color: ${(props) => props.theme.colors.black};
    background: none;
`;

export const DescText = styled.p`
    margin-bottom: 32px;
    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
    font-size: 16px;
    line-height: 1.5;
    color: ${(props) => props.theme.colors.black};
`;

export const WrapperBtnLevel = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin-bottom: 32px;
`;

export const BtnLevel = styled.button`
    display: block;
    padding: 8px 12px;

    font-family: var(--font-family);
    font-weight: var(--font-weight-medium);
    font-size: 14px;
    line-height: 1.14;

    border-radius: 35px;

    border: 1px solid
        ${(props) =>
            props.selected
                ? props.theme.colors.pink
                : props.theme.colors.spanGrey};
    color: ${(props) => props.theme.colors.black};
    background: ${(props) =>
        props.selected
            ? props.theme.colors.pink
            : props.theme.colors.background};
`;

export const BtnBookLesson = styled.button`
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
