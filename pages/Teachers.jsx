import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../src/firebase";
import { TeacherCard } from "../src/сomponents/TeacherCard/TeacherCard";
import { BtnMainLoadMore, TeachersList } from "./Teachers.styled";
import { selectFavoriteTeachers } from "../redux/user/selectors";
import { useSelector } from "react-redux";
import { Filters } from "../src/сomponents/Filters/Filters";

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [displayedTeachers, setDisplayedTeachers] = useState(4);
    const favoriteTeachers = useSelector(selectFavoriteTeachers);
    const [filterLevel, setFilterLevel] = useState("");
    const [filterPrice, setFilterPrice] = useState("");
    const [filterLanguage, setFilterLanguage] = useState("");

    useEffect(() => {
        const db = getDatabase(app);
        const dbRef = ref(db);

        const unsubscribe = onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            console.log("Updated data:", data);
            if (data && typeof data === "object") {
                const teachersArray = Object.values(data);
                setTeachers(teachersArray);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    // фільтрування тічерів
    const filteredTeachers = teachers.filter((teacher) => {
        if (filterLevel && teacher.levels !== filterLevel) {
            return false;
        }
        if (filterPrice && teacher.price_per_hour !== filterPrice) {
            return false;
        }
        if (
            filterLanguage &&
            teacher.languages.indexOf(filterLanguage) === -1
        ) {
            return false;
        }
        return true;
    });
    // Збільшення кількості відображених карток
    const handleLoadMore = () => {
        setDisplayedTeachers((prevCount) => prevCount + 4);
    };

    return (
        <>
            <Filters
                filterLevel={filterLevel}
                filterPrice={filterPrice}
                filterLanguage={filterLanguage}
                setFilterLevel={setFilterLevel}
                setFilterPrice={setFilterPrice}
                setFilterLanguage={setFilterLanguage}
            />
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
            {displayedTeachers < teachers.length && (
                <BtnMainLoadMore onClick={handleLoadMore}>
                    Load More
                </BtnMainLoadMore>
            )}
        </>
    );
};

export default Teachers;
