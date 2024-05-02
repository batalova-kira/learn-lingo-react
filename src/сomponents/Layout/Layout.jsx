import React from "react";
import {
    Container,
    Header,
    LogoText,
    LogoWrapper,
    PagesWrapper,
    StyledNavLink,
} from "./Layout.styled";
import IconUkraine from "../../assets/icons/ukraine.svg";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../../../redux/user/selectors";
import {
    FAVORITE_ROUTE,
    HOME_ROUTE,
    TEACHERS_ROUTE,
} from "../../constants/routes";
import { AuthUser } from "../AuthWrapper/AuthWrapper";

const Layout = ({ children }) => {
    const isAuth = useSelector(isAuthenticated);

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
