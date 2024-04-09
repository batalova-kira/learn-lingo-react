import { NavLink } from "react-router-dom";
import ModalWrapper from "../Modal/Modal";
import { SignUpForm } from "../SignUp/SignUp";
import { LOGIN_ROUTE } from "../../constants/routes";
import { TitleModal } from "../Modal/Modal.styled";
import { TextModal } from "./SignUpModal.styled";

export const SignUpModal = ({ isOpen }) => {
    return (
        <ModalWrapper isOpen={isOpen}>
            <TitleModal>Registration</TitleModal>
            <TextModal>
                Thank you for your interest in our platform! In order to
                register, we need some information. Please provide us with the
                following information
            </TextModal>
            <SignUpForm />
            <p>
                Already have an account?
                <NavLink to={LOGIN_ROUTE}>Sign in</NavLink>
            </p>
        </ModalWrapper>
    );
};
