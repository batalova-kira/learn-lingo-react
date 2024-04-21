import React from "react";
import {
    HeaderLanguages,
    HeaderName,
    HeartBtn,
    HeartFullIcon,
    HeartIcon,
    TitleIcon,
    TitleSpan,
    TitleSpanAccent,
    TitleText,
    WrapperHeaderCard,
    WrapperHeaderDesc,
    WrapperName,
    WrapperTitle,
} from "./CardHeader.styled";
import IconBook from "../../assets/icons/book.svg";
import IconStar from "../../assets/icons/start.svg";
import { CardDescription } from "../CardDescription/CardDescription";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../../redux/user/userSlice";
import { isAuthenticated } from "../../../redux/user/selectors";
import { toast } from "react-toastify";

export const CardHeader = ({ item, isFavorite }) => {
    const { name, surname, lessons_done, rating, price_per_hour } = item;
    const dispatch = useDispatch();
    const isAuth = useSelector(isAuthenticated);

    const handleClick = (event) => {
        event.preventDefault();
        if (!isAuth) {
            toast.error(
                "This feature is available only for authenticated users!"
            );
            return;
        }
        dispatch(toggleFavorite(item));
    };
    return (
        <WrapperHeaderDesc>
            <WrapperHeaderCard>
                <WrapperName>
                    <HeaderLanguages>Languages</HeaderLanguages>
                </WrapperName>
                <WrapperTitle>
                    <TitleIcon src={IconBook} alt="book" />
                    <TitleText>Lessons online</TitleText>
                    <TitleSpan>|</TitleSpan>
                    <TitleText>Lessons done: {lessons_done}</TitleText>
                    <TitleSpan>|</TitleSpan>
                    <TitleIcon src={IconStar} alt="star rating" />
                    <TitleText>Rating: {rating}</TitleText>
                    <TitleSpan>|</TitleSpan>
                    <TitleText>
                        Price / 1 hour:{" "}
                        <TitleSpanAccent>{price_per_hour}$</TitleSpanAccent>
                    </TitleText>
                    <HeartBtn type="button" onClick={handleClick}>
                        {isFavorite ? <HeartFullIcon /> : <HeartIcon />}
                    </HeartBtn>
                </WrapperTitle>
            </WrapperHeaderCard>
            <HeaderName>
                {name} {surname}
            </HeaderName>
            <CardDescription item={item} />
        </WrapperHeaderDesc>
    );
};
