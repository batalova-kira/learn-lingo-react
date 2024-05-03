import React, { useEffect, useState } from "react";
import { ref, onValue, getDatabase } from "firebase/database";
import { app, db } from "../src/firebase";
import { TeacherCard } from "../src/сomponents/TeacherCard/TeacherCard";
import { BtnMainLoadMore, TeachersList } from "./Teachers.styled";
import { selectFavoriteTeachers } from "../redux/user/selectors";
import { useSelector } from "react-redux";
import { Filters } from "../src/сomponents/Filters/Filters";
import {
    selectLanguage,
    selectLevel,
    selectPrice,
} from "../redux/filters/filtersSelectors";

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [displayedTeachers, setDisplayedTeachers] = useState(4);
    const favoriteTeachers = useSelector(selectFavoriteTeachers);
    const filterLanguage = useSelector(selectLanguage);
    const filterLevel = useSelector(selectLevel);
    const filterPrice = useSelector(selectPrice);

    useEffect(() => {
        const dbRef = ref(db);

        const unsubscribe = onValue(dbRef, (snapshot) => {
            try {
                const data = snapshot.val();
                console.log("Updated data:", data);
                if (data && typeof data === "object") {
                    const teachersArray = Object.values(data);
                    setTeachers(teachersArray);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    // Збільшення кількості відображених карток
    const handleLoadMore = () => {
        setDisplayedTeachers((prevCount) => prevCount + 4);
    };

    const filterTeachers = (
        teachers,
        filterLanguage,
        filterLevel,
        filterPrice
    ) => {
        // Початковий масив вчителів, який буде фільтруватися
        let filteredTeachers = teachers;

        // Фільтр за мовою
        if (filterLanguage) {
            filteredTeachers = filteredTeachers.filter((teacher) =>
                teacher.languages.includes(filterLanguage)
            );
        }

        // Фільтр за рівнем
        if (filterLevel) {
            filteredTeachers = filteredTeachers.filter((teacher) =>
                teacher.levels.includes(filterLevel)
            );
        }

        // Фільтр за ціною
        if (filterPrice) {
            filteredTeachers = filteredTeachers.filter(
                (teacher) =>
                    Number(teacher.price_per_hour) === Number(filterPrice)
            );
        }

        return filteredTeachers;
    };

    const filteredTeachers = filterTeachers(
        teachers,
        filterLanguage,
        filterLevel,
        filterPrice
    );

    return (
        <>
            <Filters teachers={teachers} />
            <TeachersList>
                {filteredTeachers.slice(0, displayedTeachers).map((item) => (
                    <li key={item.id}>
                        <TeacherCard
                            item={item}
                            isFavorite={
                                favoriteTeachers &&
                                favoriteTeachers.some(
                                    (favorite) => favorite.id === item.id
                                )
                            }
                        />
                    </li>
                ))}
            </TeachersList>
            {displayedTeachers < filteredTeachers.length && (
                <BtnMainLoadMore onClick={handleLoadMore}>
                    Load More
                </BtnMainLoadMore>
            )}
        </>
    );
};

export default Teachers;
