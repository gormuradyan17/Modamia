import { ChangeEvent, FormEvent, useState } from "react";
import InputUI from "shared/ui/InputUI/InputUI";
import './style.scss'
import { useDispatch, useSelector } from "react-redux";
import { getSigninData, isLoggedIn, setActiveSuperAdmin, setIsAuth, setSigninData } from "redux/reducers/authReducer";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import { ObjectType, appColor, setCookie } from "shared/helpers/helpers";
import { adminSignin } from "services/authService";
import { Navigate, useNavigate } from "react-router-dom";

const Signin = () => {

    const isAuth = useSelector(isLoggedIn)

    const signinData = useSelector(getSigninData)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [errors, setErrors] = useState<ObjectType>({
        password: '',
        email: ''
    })

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const response: any = await adminSignin(signinData, setErrors);
        if (response?.accessToken) {
            setCookie('accessToken', response.accessToken, 365)
            dispatch(setActiveSuperAdmin(response?.admin))
            dispatch(setIsAuth(true));
            navigate('/');
        }
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = event
        dispatch(setSigninData({ name, value }))
    }

    if (isAuth) return <Navigate to='/' />

    return (
        <div className="auth-signin">
            <form className="auth-signin-form" onSubmit={onSubmit}>
                <HeadingUI
                    classN="auth-signin-title"
                    size="20px"
                    color={appColor}
                    text="Sign In to Super Admin Panel"
                    align="center"
                />
                <InputUI
                    type="text"
                    name="email"
                    value={signinData?.email}
                    error={errors?.email}
                    placeholder="Email"
                    callback={handleInputChange}
                />
                <InputUI
                    type="password"
                    name="password"
                    value={signinData?.password}
                    error={errors?.password}
                    placeholder="Password"
                    callback={handleInputChange}
                />
                <ButtonUI
                    type="submit"
                    classN='auth-signin-buton'
                >Sign In</ButtonUI>
            </form>
        </div>
    );
};

export default Signin;