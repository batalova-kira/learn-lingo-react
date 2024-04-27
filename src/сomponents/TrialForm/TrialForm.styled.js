import styled from "styled-components";

export const WrapperRadioButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 40px;
`;

export const RadioButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 8px;
`;

export const RadioButtonLabel = styled.label`
    display: flex;
    align-items: center;
    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
    font-size: 16px;
    line-height: 1.37;
    color: ${(props) => props.theme.colors.black};
`;

export const RadioButtonInput = styled.input`
    position: relative;
    margin-right: 8px;
    width: 20px;
    height: 20px;

    cursor: pointer;
    appearance: none;
    color: ${(props) => props.theme.colors.pink};
    border: 1px solid ${(props) => props.theme.colors.spanGrey};
    border-radius: 50%;
    transition: all 0.1s ease-in-out;
    &:hover {
        border: 1px solid ${(props) => props.theme.colors.pink};
    }
    &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        background-color: transparent;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    &:checked::after {
        background-color: ${(props) => props.theme.colors.pink};
    }
    &:hover::after {
        background-color: ${(props) => props.theme.colors.pink};
    }

    &:checked {
        outline: 1px solid ${(props) => props.theme.colors.pink};
        border: 1px solid ${(props) => props.theme.colors.pink};
    }
`;

export const BookBtn = styled.button`
    display: inline;
    border-radius: 12px;
    padding: 16px 215px;
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    font-size: 18px;
    line-height: 1.56;
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.pink};

    &:hover {
        cursor: pointer;
        background: ${(p) => p.theme.colors.darkPink};
    }
`;

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-bottom: 40px;
`;
