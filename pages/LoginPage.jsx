import React from "react";
import { NavLink } from "react-router-dom/dist";

import SignInModal from "../src/сomponents/SignInModal/SignInModal";
import { useSelector } from "react-redux";
import { selectIsOpenModal } from "../redux/modal/modalSelectors";

const LoginPage = () => {
    const isOpenModal = useSelector(selectIsOpenModal);
    console.log(isOpenModal);
    return (
        <>
            <SignInModal isOpen={isOpenModal} />
            <p>
                Or <NavLink to="/registration">Registration</NavLink>
            </p>
        </>
    );
};

export default LoginPage;
