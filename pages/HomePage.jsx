import React, { useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../src/firebase";

const HomePage = () => {
    useEffect(() => {
        const db = getDatabase(app); // Отримуємо посилання на базу даних

        const dbRef = ref(db); // Отримуємо посилання на кореневий вузол бази даних

        // Додаємо прослуховувач подій для отримання оновлень усіх даних з кореневого вузла бази даних
        const unsubscribe = onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            console.log("Updated data:", data);
            // Оновлення стану компонента або виконання інших дій з отриманими даними
        });

        // При необхідності можна повернути функцію очищення для відписки від прослуховувача
        return () => {
            unsubscribe();
        };
    }, []); // Передавайте пустий масив, щоб ефект запускався лише після монтування компонента

    return (
        <>
            <h2>Welcome</h2>
        </>
    );
};

export default HomePage;
