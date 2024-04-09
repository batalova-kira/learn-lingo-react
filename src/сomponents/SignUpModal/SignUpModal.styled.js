import styled from "styled-components";

export const TextModal = styled.p`
    margin-bottom: 40px;

    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 137%;
    color: ${(props) => props.theme.colors.modalBlack};
`;
