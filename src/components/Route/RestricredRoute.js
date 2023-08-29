import { useSelector } from "react-redux"
import { Navigate } from "react-router";
import { selectIsLoggedIn } from "redux/auth/selectors"

export const RestricredRoute = ({component: Component, redirectTo = '/'}) => {
    const isLoggenIn = useSelector(selectIsLoggedIn);
    return isLoggenIn ? <Navigate to={redirectTo}/> : Component;
}