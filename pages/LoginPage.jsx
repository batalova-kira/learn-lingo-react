import React from "react";

import SignInModal from "../src/сomponents/SignInModal/SignInModal";
import { useSelector } from "react-redux";
import { selectIsOpenModal } from "../redux/modal/modalSelectors";
import { Hero } from "../src/сomponents/Hero/Hero";

const LoginPage = () => {
    const isOpenModal = useSelector(selectIsOpenModal);

    return (
        <>
            <SignInModal isOpen={isOpenModal} />
            <Hero />
        </>
    );
};

export default LoginPage;
