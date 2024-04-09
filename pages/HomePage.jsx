import React, { useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../src/firebase";
import { Hero } from "../src/сomponents/Hero/Hero";

const HomePage = () => {
    useEffect(() => {
        const db = getDatabase(app);

        const dbRef = ref(db);

        const unsubscribe = onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            console.log("Updated data:", data);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <>
            <Hero />
        </>
    );
};

export default HomePage;
