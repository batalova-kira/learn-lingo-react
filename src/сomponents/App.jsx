import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

import Layout from "./Layout/Layout";

const HomePage = lazy(() => import("../../pages/HomePage"));
const Teachers = lazy(() => import("../../pages/Teachers"));
const Favorites = lazy(() => import("../../pages/Favorites"));

export const App = () => {
    return (
        <Layout>
            <Suspense fallback={<p>Loading..</p>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/teachers" element={<Teachers />} />
                    <Route path="/favorites" element={<Favorites />} />
                    {/* <Route path="/posts/:postId/*" element={<PostDetails />} /> */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Suspense>
        </Layout>
    );
};

export default App;
