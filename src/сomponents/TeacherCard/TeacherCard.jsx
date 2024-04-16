import React from "react";
import {
    Avatar,
    AvatarIcon,
    WrapperAvatar,
    WrapperCard,
} from "./TeacherCard.styled";
import IconOnline from "../../assets/icons/online.svg";
import { CardHeader } from "../CardHeader/CardHeader";
import { WrapperHeaderCard } from "../CardHeader/CardHeader.styled";

export const TeacherCard = ({ item }) => {
    const { avatar_url } = item;
    return (
        <WrapperCard>
            <WrapperAvatar>
                <Avatar src={avatar_url} alt="teacher" />
                <AvatarIcon src={IconOnline} alt="online status" />
            </WrapperAvatar>

            <CardHeader item={item} />
        </WrapperCard>
    );
};
