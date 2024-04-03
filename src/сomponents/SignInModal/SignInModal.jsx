import React from "react";

import { SignIn } from "../SignIn/SignIn";
import ModalWrapper from "../Modal/Modal";

const SignInModal = ({ isOpen }) => {
    return (
        <ModalWrapper title="Sign In" isOpen={isOpen}>
            <SignIn />
        </ModalWrapper>
    );
};

export default SignInModal;
