import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import './style.scss'
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
// import { adminSignout } from "services/authService";
// import { eraseCookie } from "shared/helpers/helpers";
import { useDispatch } from "react-redux";
// import { setActiveSuperAdmin, setIsAuth } from "redux/reducers/authReducer";
import { useNavigate } from "react-router-dom";

interface Props {
    text: string,
}

const MainHead = ({
    text
}: Props) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    return (
        <div className="main-head">
            <HeadingUI text={text} color="#aa8a75" />
        </div>
    );
};

export default MainHead;