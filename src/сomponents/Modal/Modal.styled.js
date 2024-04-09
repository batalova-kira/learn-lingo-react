import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const StyledModal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${(props) =>
        props.specialLook ? "rgba(255, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.5)"};
    /* width: 100vw;
     height: 100vh; */
    &:hover {
        cursor: pointer;
    }

    .modal {
        padding: 64px;
        max-width: 566px;
        width: 100%;
        min-height: 450px;
        background-color: white;
        border-radius: 30px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        &:hover {
            cursor: auto;
        }
    }
`;

export const BtnClose = styled(IoClose)`
    fill: ${(p) => p.theme.colors.black};

    position: absolute;
    top: 20px;
    right: 20px;

    font-size: 32px;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all var(--primary-transition);

    &:hover {
        transform: rotate(90deg);
        fill: ${(p) => p.theme.colors.pink};
    }
`;

export const TitleModal = styled.h2`
    font-weight: 500;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-align: start;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.black};
`;
