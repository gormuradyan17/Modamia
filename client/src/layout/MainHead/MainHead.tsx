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

    const signout = async () => {
		try {
			// const data = await adminSignout();
			// if (data) {
			// 	eraseCookie('accessToken')
			// 	dispatch(setIsAuth(false));
            //     dispatch(setActiveSuperAdmin({}))
			// 	navigate('/login');
			// }
		} catch (error) {
			console.log(error);
		}
    }

    return (
        <div className="main-head">
            <HeadingUI text={text} color="#aa8a75" />
            <ButtonUI
                classN="main-head-logout"
                onClick={signout}
            >
                <FontAwesomeIcon icon={faSignOutAlt} />
                <span>Sign out</span>
            </ButtonUI>
        </div>
    );
};

export default MainHead;