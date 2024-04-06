import { NavLink } from "react-router-dom";
import ModalWrapper from "../Modal/Modal";
import { SignUpForm } from "../SignUp/SignUp";
import { LOGIN_ROUTE } from "../../constants/routes";

export const SignUpModal = ({ isOpen }) => {
    return (
        <ModalWrapper title="RegisterPage" isOpen={isOpen}>
            <SignUpForm />
            <p>
                Already have an account?
                <NavLink to={LOGIN_ROUTE}>Sign in</NavLink>
            </p>
        </ModalWrapper>
    );
};
