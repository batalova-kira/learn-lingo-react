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
import {
    FAVORITE_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    TEACHERS_ROUTE,
} from "../../constants/routes";

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
                    <StyledNavLink className="header-link" to={HOME_ROUTE}>
                        Home
                    </StyledNavLink>
                    <StyledNavLink className="header-link" to={TEACHERS_ROUTE}>
                        Teachers
                    </StyledNavLink>
                    {isAuth && (
                        <StyledNavLink
                            className="header-link"
                            to={FAVORITE_ROUTE}
                        >
                            Favorites
                        </StyledNavLink>
                    )}
                </PagesWrapper>
                <AuthWrapper>
                    {isAuth ? (
                        <button onClick={handleLogout}>
                            Log Out {user.name}
                        </button>
                    ) : (
                        <>
                            <StyledNavLink
                                to={LOGIN_ROUTE}
                                onClick={handleLoginClick}
                            >
                                Login
                            </StyledNavLink>
                        </>
                    )}
                    <StyledNavLink
                        to={REGISTRATION_ROUTE}
                        onClick={handleLoginClick}
                    >
                        Registration
                    </StyledNavLink>
                </AuthWrapper>
            </Header>
            <main>{children}</main>
        </Container>
    );
};

export default Layout;
