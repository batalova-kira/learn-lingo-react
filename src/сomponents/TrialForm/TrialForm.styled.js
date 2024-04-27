import styled from "styled-components";

export const WrapperRadioButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
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
    width: 24px;
    height: 24px;
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
        width: 20px;
        height: 20px;
        margin: 4px;
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
    &::after {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    /* Фокусний стиль */
    &:focus {
        outline: 2px solid ${(props) => props.theme.colors.pink};
    }
`;
