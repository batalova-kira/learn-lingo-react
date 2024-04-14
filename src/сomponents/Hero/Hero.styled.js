import styled from "styled-components";

export const WrapperHero = styled.div`
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
`;

export const HeroLeft = styled.div`
    padding: 98px 108px 98px 64px;
    max-width: 720px;
    /* max-height: 530px; */
    margin-left: -64px;

    border-radius: 30px;
    background: ${(props) => props.theme.colors.secondBackground};
`;

export const TitleHeroLeft = styled.h1`
    max-width: 548px;
    margin-bottom: 32px;

    font-family: var(--font-family);
    font-weight: var(--font-weight-medium);
    font-size: 48px;
    line-height: 117%;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.black};
`;

export const HeroLeftAccent = styled.span`
    font-style: italic;
    font-weight: var(--font-weight-regular);
    border-radius: 8px;
    background: ${(props) => props.theme.colors.heroBackground};
`;

export const TextHeroWrapper = styled.div`
    max-width: 471px;
    align-items: start;
    margin-bottom: 64px;
`;

export const TextHeroLeft = styled.p`
    width: 100%;
    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
    font-size: 16px;
    line-height: 1.37;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.black};
`;

export const HeroBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 88px;

    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    font-size: 18px;
    line-height: 1.56;
    color: ${(props) => props.theme.colors.black};

    border-radius: 12px;
    color: ${(props) => props.theme.colors.black};
    background: ${(props) => props.theme.colors.pink};

    &:hover {
        cursor: pointer;
        background: ${(p) => p.theme.colors.darkPink};
    }
`;

export const HeroRight = styled.div`
    border-radius: 30px;
    max-width: 568px;
    /* max-height: 530px; */
    margin-right: -64px;

    background: ${(props) => props.theme.colors.heroBackground};
`;

export const WrapperHeroBottom = styled.div`
    display: flex;
    gap: 100px;
    padding: 40px 123px;
    margin-right: -64px;
    margin-left: -64px;
    max-width: 1312px;
    border: 1.5px dashed ${(props) => props.theme.colors.pink};
    border-radius: 30px;
`;

export const WrapperDivBottom = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const HeroBottomNumber = styled.p`
    white-space: nowrap;
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    font-size: 28px;
    line-height: 1.14;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.black};
`;

export const HeroBottomText = styled.p`
    max-width: 96px;
    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.secondBlack};
`;
