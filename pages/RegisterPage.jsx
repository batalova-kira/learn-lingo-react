import React from "react";

import { useSelector } from "react-redux";

import { selectIsOpenModal } from "../redux/modal/modalSelectors";
import { SignUpModal } from "../src/сomponents/SignUpModal/SignUpModal";
import { Hero } from "../src/сomponents/Hero/Hero";

const RegisterPage = () => {
    const isOpenModal = useSelector(selectIsOpenModal);

    return (
        <>
            <SignUpModal isOpen={isOpenModal} />
            <Hero />
        </>
    );
};

export default RegisterPage;
