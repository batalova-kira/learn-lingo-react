import React from "react";
import {
    Avatar,
    AvatarIcon,
    WrapperAvatar,
    WrapperCard,
} from "./TeacherCard.styled";
import IconOnline from "../../assets/icons/online.svg";

export const TeacherCard = ({ item }) => {
    const { avatar_url, name } = item;
    return (
        <WrapperCard>
            <WrapperAvatar>
                <Avatar src={avatar_url} alt="teacher" />
                <AvatarIcon src={IconOnline} alt="online status" />
            </WrapperAvatar>
            <div>
                <p>{name}</p>
            </div>
        </WrapperCard>
    );
};
