import React, { useState } from "react";
import { HeaderLanguages } from "../CardHeader/CardHeader.styled";
import {
    BtnBookLesson,
    BtnLevel,
    BtnLoadMore,
    DescAccent,
    DescText,
    DescWrapper,
    WrapperBtnLevel,
} from "./CardDescription.styled";
import { ReviewItem } from "../ReviewItem/ReviewItem";
import { useDispatch, useSelector } from "react-redux";
import { selectLevel } from "../../../redux/user/selectors";
import { setSelectedLevel } from "../../../redux/user/userSlice";

export const CardDescription = ({ item }) => {
    const [showDetails, setShowDetails] = useState(false);
    const selectedLevel = useSelector(selectLevel);
    const dispatch = useDispatch();

    // Функція для встановлення обраного рівня
    const handleSelectLevel = (level) => {
        dispatch(setSelectedLevel(level));
    };

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    const { languages, lesson_info, conditions, experience, reviews, levels } =
        item;

    return (
        <>
            <DescWrapper>
                <HeaderLanguages>
                    Speaks: <DescAccent>{languages.join(", ")}</DescAccent>
                </HeaderLanguages>
                <HeaderLanguages>
                    Lesson Info: <DescAccent>{lesson_info}</DescAccent>
                </HeaderLanguages>
                <HeaderLanguages>
                    Conditions: <DescAccent>{conditions.join(" ")}</DescAccent>
                </HeaderLanguages>
            </DescWrapper>
            {!showDetails && (
                <BtnLoadMore type="button" onClick={toggleDetails}>
                    Read more
                </BtnLoadMore>
            )}
            {showDetails && (
                <>
                    <DescText>{experience}</DescText>
                    <div>
                        {reviews.map((review, index) => (
                            <ReviewItem key={index} review={review} />
                        ))}
                        <WrapperBtnLevel>
                            {levels.map((level, index) => (
                                <BtnLevel
                                    key={index}
                                    onClick={() => handleSelectLevel(level)}
                                    selected={selectedLevel === level}
                                >
                                    {level}
                                </BtnLevel>
                            ))}
                        </WrapperBtnLevel>
                        <BtnBookLesson>Book trial lesson</BtnBookLesson>
                    </div>
                </>
            )}
        </>
    );
};
