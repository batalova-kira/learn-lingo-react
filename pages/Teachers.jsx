import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../src/firebase";
import { TeacherCard } from "../src/сomponents/TeacherCard/TeacherCard";
import { TeachersList } from "./Teachers.styled";

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);

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

    return (
        <>
            <TeachersList>
                {teachers.map((item, index) => (
                    <li key={index}>
                        <TeacherCard item={item} />
                    </li>
                ))}
            </TeachersList>
        </>
    );
};

export default Teachers;
