import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isLogged } from "redux/reducers/userReducer";

const PrivateWrapper = ({
    children
}: any) => {
    
    // const logged = useSelector(isLogged);
    // if (!logged) return <Navigate to='/login' />

    return children

};

export default PrivateWrapper;