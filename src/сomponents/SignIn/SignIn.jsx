import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setUser, setToken } from "../../../redux/user/userSlice";
import { InputSignUp, SignBtn, WrapperInput } from "../SignUp/SignUp.styled";

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
        <>
            <form onSubmit={onSubmitSignIn}>
                <InputSignUp
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <WrapperInput>
                    <InputSignUp
                        type="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder="Password"
                    />
                </WrapperInput>

                <SignBtn type="submit">Sign In</SignBtn>
            </form>
        </>
    );
};
