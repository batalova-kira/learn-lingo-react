import React from "react";
import {
    Avatar,
    AvatarIcon,
    WrapperAvatar,
    WrapperCard,
} from "./TeacherCard.styled";
import IconOnline from "../../assets/icons/online.svg";
import { CardHeader } from "../CardHeader/CardHeader";

export const TeacherCard = ({ item, isFavorite }) => {
    const { avatar_url } = item;
    return (
        <WrapperCard>
            <WrapperAvatar>
                <Avatar src={avatar_url} alt="teacher" />
                <AvatarIcon src={IconOnline} alt="online status" />
            </WrapperAvatar>
            <CardHeader item={item} isFavorite={isFavorite} />
        </WrapperCard>
    );
};
