import React from "react";
import { NavLink } from "react-router-dom/dist";

const LoginPage = () => {
    return (
        <>
            <h2>LoginPage</h2>
            <p>
                Or <NavLink to="/registration">Registration</NavLink>
            </p>
        </>
    );
};

export default LoginPage;
