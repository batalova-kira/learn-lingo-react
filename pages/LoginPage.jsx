import React from "react";

import SignInModal from "../src/сomponents/SignInModal/SignInModal";
import { useSelector } from "react-redux";
import { selectIsOpenModal } from "../redux/modal/modalSelectors";

const LoginPage = () => {
    const isOpenModal = useSelector(selectIsOpenModal);
    console.log(isOpenModal);
    return (
        <>
            <SignInModal isOpen={isOpenModal} />
        </>
    );
};

export default LoginPage;
