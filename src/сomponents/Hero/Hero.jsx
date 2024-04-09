import React from "react";
import {
    HeroBtn,
    HeroLeft,
    HeroLeftAccent,
    HeroRight,
    TextHeroLeft,
    TextHeroWrapper,
    TitleHeroLeft,
    WrapperHero,
} from "./Hero.styled";
import girl from "../../assets/icons/girl.svg";

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
                    <HeroBtn>Get started</HeroBtn>
                </HeroLeft>
                <HeroRight>
                    <img src={girl} alt="happy girl with laptop" />
                </HeroRight>
            </WrapperHero>
        </>
    );
};
