import styled from "styled-components";

export const InputSignUp = styled.input`
    margin-bottom: 18px;
    padding: 16px 18px;
    width: 100%;

    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
    font-size: 16px;
    line-height: 1.37;

    border-radius: 12px;
    border: 1px solid ${(props) => props.theme.colors.borderBlack};
    color: ${(props) => props.theme.colors.black};

    &::placeholder {
        color: ${(props) => props.theme.colors.black};
        opacity: 1;
    }

    &:focus {
        outline: 1px solid ${(props) => props.theme.colors.darkPink};
    }
`;

export const WrapperInput = styled.div`
    margin-bottom: 22px;
`;

export const SignBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 16px 0;

    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    font-size: 18px;
    line-height: 1.56;

    border-radius: 12px;
    color: ${(props) => props.theme.colors.black};
    background: ${(props) => props.theme.colors.pink};

    &:hover {
        cursor: pointer;
        background: ${(p) => p.theme.colors.darkPink};
    }
`;
