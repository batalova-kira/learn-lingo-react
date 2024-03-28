import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "../Form/Form";

import React from "react";

export const SignUp = () => {
    const dispatch = useDispatch();
    const handleRegistration = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(console.log)
            .catch(console.error);
    };

    return <Form title="Registration" handleClick={handleRegistration} />;
};
