import styled from "styled-components";
import { TextModal } from "../SignUpModal/SignUpModal.styled";
import { WrapperAvatar } from "../ReviewItem/ReviewItem.styled";

export const CustomTextModal = styled(TextModal)`
    margin-bottom: 20px;
`;

export const AvatarTeacher = styled.img`
    border-radius: 100px;
    width: 44px;
    height: 44px;
`;

export const WrapperTrialAvatar = styled(WrapperAvatar)`
    gap: 14px;
    margin-bottom: 40px;
`;

export const WrapperName = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const TitleForName = styled.p`
    font-family: var(--font-family);
    font-weight: var(--font-weight-medium);
    font-size: 12px;
    line-height: 1.33;
    color: ${(props) => props.theme.colors.grey};
`;

export const TextName = styled.p`
    font-family: var(--font-family);
    font-weight: var(--font-weight-medium);
    font-size: 16px;
    line-height: 1.5;
    color: ${(props) => props.theme.colors.black};
`;

export const TextTitleQuestion = styled.h3`
    margin-bottom: 20px;
    font-family: var(--font-family);
    font-weight: var(--font-weight-medium);
    font-size: 24px;
    line-height: 1.33;
    color: ${(props) => props.theme.colors.black};
`;
