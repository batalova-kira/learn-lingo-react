import React from "react";
import "firebase/auth";

import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated, selectUser } from "../../../redux/user/selectors";
import { removeUser } from "../../../redux/user/userSlice";
import {
    AuthWrapper,
    BtnLogOut,
    LogOutBtn,
    NameText,
    StyledAuthLink,
    StyledRegistrationLink,
} from "../Layout/Layout.styled";
import IconLogin from "../../assets/icons/login.svg";
import { openModal } from "../../../redux/modal/modalSlice";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../constants/routes";
import { getAuth, signOut } from "firebase/auth";

export const AuthUser = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(isAuthenticated);
    const user = useSelector(selectUser);

    const handleLogout = () => {
        const auth = getAuth();

        signOut(auth) // Викликаємо метод signOut() об'єкта auth для виходу з облікового запису
            .then(() => {
                dispatch(removeUser());
            })
            .catch((error) => {
                console.error("Помилка виходу:", error);
            });
    };

    const handleLoginClick = () => {
        dispatch(openModal(LOGIN_ROUTE)); // Відкриття модального вікна для логіну
    };

    const handleRegistrationClick = () => {
        dispatch(openModal(REGISTRATION_ROUTE)); // Відкриття модального вікна для реєстрації
    };

    return (
        <AuthWrapper>
            {isAuth ? (
                <LogOutBtn onClick={handleLogout}>
                    <BtnLogOut />
                    Log Out <NameText>{user.name}</NameText>
                </LogOutBtn>
            ) : (
                <>
                    <StyledAuthLink onClick={handleLoginClick} to={LOGIN_ROUTE}>
                        <img src={IconLogin} alt="Log in" />
                        Log in
                    </StyledAuthLink>
                    <StyledRegistrationLink
                        onClick={handleRegistrationClick}
                        to={REGISTRATION_ROUTE}
                    >
                        Registration
                    </StyledRegistrationLink>
                </>
            )}
        </AuthWrapper>
    );
};
