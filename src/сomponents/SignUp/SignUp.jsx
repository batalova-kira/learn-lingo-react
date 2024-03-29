import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { setUser } from "../../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export const SignUpForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const handleRegistration = async (e) => {
        e.preventDefault();
        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;
            await updateProfile(user, { displayName: name });
            console.log(user);
            dispatch(setUser({ name: name, email: user.email, uid: user.uid }));
            navigateTo("/");
        } catch (error) {
            console.error("Error registering user:", error);
        }
    };

    return (
        <form onSubmit={handleRegistration}>
            <div>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Name"
                />
            </div>
            <div>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email"
                />
            </div>
            <div>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
};
