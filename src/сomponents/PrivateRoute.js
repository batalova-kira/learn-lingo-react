import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../../redux/user/selectors";

const PrivateRoute = ({ element, fallback, ...props }) => {
    const isAuthenticatedUser = useSelector(isAuthenticated);

    return isAuthenticatedUser ? (
        <Route {...props} element={element} />
    ) : (
        <Navigate to={fallback} />
    );
};

export default PrivateRoute;
