import React from "react";

import { useSelector } from "react-redux";

import { selectIsOpenModal } from "../redux/modal/modalSelectors";
import { SignUpModal } from "../src/сomponents/SignUpModal/SignUpModal";

const RegisterPage = () => {
    const isOpenModal = useSelector(selectIsOpenModal);
    console.log(isOpenModal);
    return (
        <>
            <SignUpModal isOpen={isOpenModal} />
        </>
    );
};

export default RegisterPage;
