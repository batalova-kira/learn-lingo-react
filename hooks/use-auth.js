import { useSelector } from "react-redux";
import { selectUser } from "../redux/user/selectors";

export function useAuth() {
    const { email, token, id, name } = useSelector(selectUser);
    console.log("Auth info:", { email, token, id, name });
    return {
        isAuth: !!id,
        email,
        token,
        id,
        name,
    };
}
