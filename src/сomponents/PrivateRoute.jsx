import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../../redux/user/selectors";
import { LOGIN_ROUTE } from "../constants/routes";

const PrivateRoute = ({ children, navigateTo = LOGIN_ROUTE }) => {
    const isAuthenticatedUser = useSelector(isAuthenticated);

    return isAuthenticatedUser ? (
        children
    ) : (
        <Navigate to={navigateTo} replace />
    );
};

export default PrivateRoute;
