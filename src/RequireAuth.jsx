import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../store/authContext";

const RequireAuth = ({children})=> {

    const {isLoggedIn} = useAuthContext();

    if (!isLoggedIn) {
        return <Navigate to="/login"/>;
    }

    return children; 
}

export const AuthGranted = ({children})=> {
    const {isLoggedIn} = useAuthContext();
    if (isLoggedIn) {
        return <Navigate to="/dashboard"/>;
    }

    return children; 
}

export default RequireAuth;