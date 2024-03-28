import React from "react";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { app } from "../../firebase";
import { Form } from "../Form/Form";

export const SignIn = () => {
    const dispatch = useDispatch();
    const handleSignIn = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(console.log)
            .catch(console.error);
    };

    return <Form title="Log In" handleClick={handleSignIn} />;
};
