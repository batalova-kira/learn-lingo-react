import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout/Layout";
import * as ROUTES from "../constants/routes.js";
import "./../firebase";
import RestrictedRoute from "./RestrictedRoute.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

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
        element: (
            <PrivateRoute>
                <Favorites />
            </PrivateRoute>
        ),
    },
    {
        path: ROUTES.LOGIN_ROUTE,
        element: (
            <RestrictedRoute>
                <Login />
            </RestrictedRoute>
        ),
    },
    {
        path: ROUTES.REGISTRATION_ROUTE,
        element: (
            <RestrictedRoute>
                <Registration />
            </RestrictedRoute>
        ),
    },
];

export const App = () => {
    return (
        <>
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
            <ToastContainer />
        </>
    );
};

export default App;
