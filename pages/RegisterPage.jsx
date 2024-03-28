import React from "react";
import { NavLink } from "react-router-dom/dist";

const RegisterPage = () => {
    return (
        <>
            <h2>RegisterPage</h2>
            <p>
                Already have an account? <NavLink to="/login">Sign in</NavLink>
            </p>
        </>
    );
};

export default RegisterPage;
