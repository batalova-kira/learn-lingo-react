import { useSelector } from "react-redux";
import { isAuthenticated } from "../../redux/user/selectors";
import { Navigate, Route } from "react-router-dom";

const RestrictedRoute = ({ element, allowed, fallback }) => {
    const isAuthenticatedUser = useSelector(isAuthenticated);

    return isAuthenticatedUser ? (
        <Route element={element} />
    ) : (
        <Navigate to={fallback} />
    );
};

export default RestrictedRoute;
