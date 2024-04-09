import React from "react";

import { SignIn } from "../SignIn/SignIn";
import ModalWrapper from "../Modal/Modal";
import { TitleModal } from "../Modal/Modal.styled";
import { TextModal } from "../SignUpModal/SignUpModal.styled";

const SignInModal = ({ isOpen }) => {
    return (
        <ModalWrapper isOpen={isOpen}>
            <TitleModal>Log In</TitleModal>
            <TextModal>
                Welcome back! Please enter your credentials to access your
                account and continue your search for an teacher.
            </TextModal>
            <SignIn />
        </ModalWrapper>
    );
};

export default SignInModal;
