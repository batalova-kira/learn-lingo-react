import React from "react";
import {
    AuthWrapper,
    Container,
    Header,
    PagesWrapper,
    StyledNavLink,
} from "./Layout.styled";

const Layout = ({ children }) => {
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
                    <StyledNavLink to="/login">Login</StyledNavLink>
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
