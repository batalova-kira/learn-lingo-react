import React from "react";
import {
    AuthWrapper,
    BtnLogOut,
    Container,
    Header,
    LogOutBtn,
    LogoText,
    LogoWrapper,
    NameText,
    PagesWrapper,
    StyledAuthLink,
    StyledNavLink,
    StyledRegistrationLink,
} from "./Layout.styled";
import IconUkraine from "../../assets/icons/ukraine.svg";
import IconLogin from "../../assets/icons/login.svg";
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
import { AuthUser } from "../AuthWrapper/AuthWrapper";

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
                <LogoWrapper>
                    <img src={IconUkraine} alt="Ukraine" />
                    <LogoText>LearnLingo</LogoText>
                </LogoWrapper>
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
                            style={{
                                display: isAuth ? "block" : "none",
                            }}
                        >
                            Favorites
                        </StyledNavLink>
                    )}
                </PagesWrapper>
                <AuthUser />
            </Header>
            <main>{children}</main>
        </Container>
    );
};

export default Layout;
