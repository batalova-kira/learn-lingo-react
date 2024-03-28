import React from "react";
import { NavLink } from "react-router-dom/dist";
import { SignUp } from "../src/сomponents/SignUp/SignUp";

const RegisterPage = () => {
    return (
        <>
            <h2>RegisterPage</h2>
            <SignUp/>
            <p>
                Already have an account? <NavLink to="/login">Sign in</NavLink>
            </p>
        </>
    );
};

export default RegisterPage;
