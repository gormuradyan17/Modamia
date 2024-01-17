import signinBG from "assets/images/singin.gif"
import { ButtonUI } from 'shared/ui/ButtonUI/ButtonUI';
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI';
import "./style.scss"
import { useDispatch, useSelector } from "react-redux";
import { getUserState, isLogged, setIsLogged, setUserState } from "redux/reducers/userReducer";
import { Link, Navigate, useNavigate } from "react-router-dom";
import InputUI from "shared/ui/InputUI/InputUI";
import { ChangeEvent, FormEvent, useState } from "react";
import { ObjectType, setCookie } from "shared/helpers/helpers";
import { authUserSignin } from "services/userService";
import { SIGNIN_SHOPIFY_URL } from "shared/constants/genericApiRoutes";
const Signin = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(isLogged)
    const userData = useSelector(getUserState)
    const navigate = useNavigate()
    const [errors, setErrors] = useState<ObjectType>({
        password: '',
        email: ''
    })
    if (isAuth) return <Navigate to='/home' />
    
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = event
        dispatch(setUserState({ name, value }))
    }
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const response: any = await authUserSignin(userData, setErrors);
        if (response?.accessToken) {
            setCookie('accessToken', response.accessToken, 365)
            dispatch(setIsLogged(true));
            navigate('/home');
        }
    }

    const signinViaShopify = () => {
        window.open(SIGNIN_SHOPIFY_URL)
    }

    return (
        <div className='signin_container'>
            <img src={signinBG} alt="" />
            <div className='signin_text_block'>
                <HeadingUI text='Sign in' color='#a57867' size='40px' />
                <form action="" onSubmit={onSubmit}>
                    <InputUI type="text" placeholder="email" callback={handleInputChange} name="email" value={userData?.email} error={errors?.email} />
                    <InputUI type="password" placeholder="password" callback={handleInputChange} name="password" value={userData?.password}
                        error={errors?.password} />
                    <ButtonUI type="submit">Sign in</ButtonUI>
                </form>
                <div className="signin_container-shopify">
                    <HeadingUI text='or' size='18px' color="gray" align="center" />
                    <ButtonUI version="gray" onClick={signinViaShopify}>SignIn Via Shopify</ButtonUI>
                </div>
                <Link className="forgot-password" to='/forgot'>Cant Remember password?</Link>
            </div>
        </div>

    );
};

export default Signin;