import React from "react";
import { useSelector } from "react-redux";
import { selectFavoriteTeachers } from "../redux/user/selectors";
import { TeacherCard } from "../src/сomponents/TeacherCard/TeacherCard";
import {
    StyledFavoriteLink,
    TeachersList,
    TextFavoriteEmpty,
    WrapperFavoriteEmpty,
} from "./Teachers.styled";

const Favorites = () => {
    const favoriteTeachers = useSelector(selectFavoriteTeachers);

    return (
        <>
            {favoriteTeachers.length > 0 ? (
                <TeachersList>
                    {favoriteTeachers.map((item) => (
                        <TeacherCard
                            key={item.id}
                            item={item}
                            isFavorite={favoriteTeachers.some(
                                (favorite) => favorite.id === item.id
                            )}
                        />
                    ))}
                </TeachersList>
            ) : (
                <WrapperFavoriteEmpty>
                    <TextFavoriteEmpty>
                        You haven't selected any favorite teachers yet.Discover
                        amazing teachers and add them to your favorites list!
                        <br />
                        <StyledFavoriteLink to="/teachers">
                            Explore teachers now
                        </StyledFavoriteLink>
                    </TextFavoriteEmpty>
                </WrapperFavoriteEmpty>
            )}
        </>
    );
};

export default Favorites;
