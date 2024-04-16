import styled from "styled-components";

export const WrapperHeaderCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const WrapperName = styled.div`
    display: block;
`;
export const WrapperHeaderDesc = styled.div`
    display: flex;
    flex-direction: column;
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
`;

export const WrapperTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;
