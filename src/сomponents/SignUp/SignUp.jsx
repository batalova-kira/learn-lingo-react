import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { getAuth } from "firebase/auth";
import { setUser, setToken } from "../../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { InputSignUp, SignBtn, WrapperInput } from "./SignUp.styled";
import { auth } from "../../firebase";

export const SignUpForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const handleRegistration = async (e) => {
        e.preventDefault();
        try {
            
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;
            await updateProfile(user, { displayName: name });

            dispatch(setToken(user.accessToken));

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
        <form onSubmit={handleRegistration}>
            <div>
                <InputSignUp
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Name"
                />
            </div>
            <div>
                <InputSignUp
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email"
                />
            </div>
            <WrapperInput>
                <InputSignUp
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                />
            </WrapperInput>
            <SignBtn type="submit">Sign Up</SignBtn>
        </form>
    );
};
