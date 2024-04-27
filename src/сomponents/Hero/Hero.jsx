import React from "react";
import {
    HeroBottomNumber,
    HeroBottomText,
    HeroBtn,
    HeroLeft,
    HeroLeftAccent,
    HeroRight,
    TextHeroLeft,
    TextHeroWrapper,
    TitleHeroLeft,
    WrapperDivBottom,
    WrapperHero,
    WrapperHeroBottom,
} from "./Hero.styled";
import girl from "../../assets/icons/girl.svg";
import { NavLink } from "react-router-dom";

export const Hero = () => {
    return (
        <>
            <WrapperHero>
                <HeroLeft>
                    <TitleHeroLeft>
                        Unlock your potential with the best{" "}
                        <HeroLeftAccent>language</HeroLeftAccent> tutors
                    </TitleHeroLeft>
                    <TextHeroWrapper>
                        <TextHeroLeft>
                            Embark on an Exciting Language Journey with Expert
                            Language Tutors: Elevate your language proficiency
                            to new heights by connecting with highly qualified
                            and experienced tutors.
                        </TextHeroLeft>
                    </TextHeroWrapper>
                    <NavLink
                        to={"/teachers"}
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <HeroBtn>Get started</HeroBtn>
                    </NavLink>
                </HeroLeft>
                <HeroRight>
                    <img src={girl} alt="happy girl with laptop" />
                </HeroRight>
            </WrapperHero>
            <WrapperHeroBottom>
                <WrapperDivBottom>
                    <HeroBottomNumber>32,000 +</HeroBottomNumber>
                    <HeroBottomText>Experienced tutors</HeroBottomText>
                </WrapperDivBottom>
                <WrapperDivBottom>
                    <HeroBottomNumber>300,000 +</HeroBottomNumber>
                    <HeroBottomText>5-star tutor reviews</HeroBottomText>
                </WrapperDivBottom>
                <WrapperDivBottom>
                    <HeroBottomNumber>120 +</HeroBottomNumber>
                    <HeroBottomText>Subjects taught</HeroBottomText>
                </WrapperDivBottom>
                <WrapperDivBottom>
                    <HeroBottomNumber>200 +</HeroBottomNumber>
                    <HeroBottomText>Tutor nationalities</HeroBottomText>
                </WrapperDivBottom>
            </WrapperHeroBottom>
        </>
    );
};
