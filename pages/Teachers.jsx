import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../src/firebase";
import { TeacherCard } from "../src/сomponents/TeacherCard/TeacherCard";
import { BtnMainLoadMore, TeachersList } from "./Teachers.styled";

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [displayedTeachers, setDisplayedTeachers] = useState(4);

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

    // Збільшення кількості відображених карток
    const handleLoadMore = () => {
        setDisplayedTeachers((prevCount) => prevCount + 4);
    };

    return (
        <>
            <TeachersList>
                {teachers.slice(0, displayedTeachers).map((item, index) => (
                    <li key={index}>
                        <TeacherCard item={item} />
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
