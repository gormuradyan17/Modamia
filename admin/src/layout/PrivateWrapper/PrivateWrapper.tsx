import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "redux/reducers/authReducer";

const PrivateWrapper = ({
    children
}: any) => {
    
    const isAuth = useSelector(isLoggedIn)

    if (!isAuth) return <Navigate to='/login' />

    return children

};

export default PrivateWrapper;