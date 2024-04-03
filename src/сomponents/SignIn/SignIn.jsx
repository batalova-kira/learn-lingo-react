import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { setUser } from "../../../redux/user/userSlice";


export const SignIn = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    
    const onSubmitSignIn = async (e) => {
        e.preventDefault();
        try {
            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                pass
            );
            const user = userCredential.user;
            console.log(user);
            dispatch(
                setUser({
                    name: user.displayName,
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                })
            );

            navigateTo("/");
        } catch (error) {
            console.error("Error registering user:", error);
        }
    };

    return (
        <>
            <form onSubmit={onSubmitSignIn}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit">Sign In</button>
            </form>
            <p>
                or <NavLink to="/registration">Registration</NavLink>
            </p>
        </>
    );
};
