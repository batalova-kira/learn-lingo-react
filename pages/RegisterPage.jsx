import React from "react";
import { NavLink } from "react-router-dom/dist";
import { SignUpForm } from "../src/сomponents/SignUp/SignUp";

const RegisterPage = () => {
    return (
        <>
            <h2>RegisterPage</h2>
            <SignUpForm />
            <p>
                Already have an account? <NavLink to="/login">Sign in</NavLink>
            </p>
        </>
    );
};

export default RegisterPage;
