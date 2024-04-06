import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

import Layout from "./Layout/Layout";
import * as ROUTES from "../constants/routes.js";
import "./../firebase";

const HomePage = lazy(() => import("../../pages/HomePage"));
const Teachers = lazy(() => import("../../pages/Teachers"));
const Favorites = lazy(() => import("../../pages/Favorites"));
const Login = lazy(() => import("../../pages/LoginPage"));
const Registration = lazy(() => import("../../pages/RegisterPage"));

export const appRoutes = [
    {
        path: ROUTES.HOME_ROUTE,
        element: <HomePage />,
    },
    {
        path: ROUTES.TEACHERS_ROUTE,
        element: <Teachers />,
    },
    {
        path: ROUTES.FAVORITE_ROUTE,
        element: <Favorites />,
    },
    {
        path: ROUTES.LOGIN_ROUTE,
        element: <Login />,
    },
    {
        path: ROUTES.REGISTRATION_ROUTE,
        element: <Registration />,
    },
];

export const App = () => {
    return (
        <Layout>
            <Suspense fallback={<p>Loading..</p>}>
                <Routes>
                    {appRoutes.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Suspense>
        </Layout>
    );
};

export default App;
