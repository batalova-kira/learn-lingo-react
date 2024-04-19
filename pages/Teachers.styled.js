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
