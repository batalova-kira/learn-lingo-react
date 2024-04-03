import React from "react";
import {
    AuthWrapper,
    Container,
    Header,
    PagesWrapper,
    StyledNavLink,
} from "./Layout.styled";

import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../../redux/user/userSlice";
import { isAuthenticated, selectUser } from "../../../redux/user/selectors";
import { openModal } from "../../../redux/modal/modalSlice";

const Layout = ({ children }) => {
    const isAuth = useSelector(isAuthenticated);
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleLogout = () => {
        dispatch(removeUser());
    };

    const handleLoginClick = () => {
        dispatch(openModal());
    };

    return (
        <Container>
            <Header>
                <PagesWrapper>
                    <StyledNavLink className="header-link" to="/">
                        Home
                    </StyledNavLink>
                    <StyledNavLink className="header-link" to="/teachers">
                        Teachers
                    </StyledNavLink>
                    <StyledNavLink className="header-link" to="/favorites">
                        Favorites
                    </StyledNavLink>
                </PagesWrapper>
                <AuthWrapper>
                    {isAuth ? (
                        <button onClick={handleLogout}>
                            Log Out {user.name}
                        </button>
                    ) : (
                        <>
                            <StyledNavLink
                                to="/login"
                                onClick={handleLoginClick}
                            >
                                Login
                            </StyledNavLink>
                        </>
                    )}
                    <StyledNavLink to="/registration">
                        Registration
                    </StyledNavLink>
                </AuthWrapper>
            </Header>
            <main>{children}</main>
        </Container>
    );
};

export default Layout;
