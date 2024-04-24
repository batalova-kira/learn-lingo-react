import React from "react";
import { useSelector } from "react-redux";
import { selectFavoriteTeachers } from "../redux/user/selectors";
import { TeacherCard } from "../src/сomponents/TeacherCard/TeacherCard";
import { TeachersList } from "./Teachers.styled";

const Favorites = () => {
    const favoriteTeachers = useSelector(selectFavoriteTeachers);

    return (
        <>
            <TeachersList>
                {favoriteTeachers &&
                    favoriteTeachers.map((item) => (
                        <TeacherCard
                            key={item.uuid}
                            item={item}
                            isFavorite={favoriteTeachers.some(
                                (favorite) => favorite.id === item.id
                            )}
                        />
                    ))}
            </TeachersList>
        </>
    );
};

export default Favorites;
