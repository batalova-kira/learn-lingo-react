import React from "react";
import ModalWrapper from "../Modal/Modal";
import { TitleModal } from "../Modal/Modal.styled";
import {
    AvatarTeacher,
    CustomTextModal,
    TextName,
    TextTitleQuestion,
    TitleForName,
    WrapperName,
    WrapperTrialAvatar,
} from "./TrialLesson.styled";
import TrialForm from "../TrialForm/TrialForm";

export const TrialLesson = ({ isOpen, item }) => {
    const { name, avatar_url } = item;
    return (
        <>
            <ModalWrapper
                isOpen={isOpen}
                navigateTo="/teachers"
                modalWidth="600px"
            >
                <TitleModal>Book trial lesson</TitleModal>
                <CustomTextModal>
                    Our experienced tutor will assess your current language
                    level, discuss your learning goals, and tailor the lesson to
                    your specific needs.
                </CustomTextModal>
                <WrapperTrialAvatar>
                    <AvatarTeacher src={avatar_url} alt="teacher" />
                    <WrapperName>
                        <TitleForName>Your teacher</TitleForName>
                        <TextName>{name}</TextName>
                    </WrapperName>
                </WrapperTrialAvatar>
                <TextTitleQuestion>
                    What is your main reason for learning English?
                </TextTitleQuestion>
                <TrialForm />
            </ModalWrapper>
        </>
    );
};
