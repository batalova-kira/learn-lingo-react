import { useSelector } from "react-redux";
import { isAuthenticated } from "../../redux/user/selectors";
import { Navigate } from "react-router-dom";
import { TEACHERS_ROUTE } from "../constants/routes";

const RestrictedRoute = ({ children, navigateTo = TEACHERS_ROUTE }) => {
    const isAuthenticatedUser = useSelector(isAuthenticated);

    return isAuthenticatedUser ? (
        <Navigate to={navigateTo} replace />
    ) : (
        children
    );
};

export default RestrictedRoute;
