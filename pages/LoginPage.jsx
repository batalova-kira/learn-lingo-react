import React from "react";
import { NavLink } from "react-router-dom/dist";
import { SignIn } from "../src/сomponents/SignIn/SignIn";

const LoginPage = () => {
    return (
        <>
            <h2>LoginPage</h2>
            <SignIn />
            <p>
                Or <NavLink to="/registration">Registration</NavLink>
            </p>
        </>
    );
};

export default LoginPage;
