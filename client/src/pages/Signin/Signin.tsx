import signinBG from "../../assets/images/singin.gif"
import { ButtonUI } from 'shared/ui/ButtonUI/ButtonUI';
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI';
import "./style.scss"
import { useDispatch, useSelector } from "react-redux";
import { getUserState, isLogged, setIsLogged, setUserState } from "redux/reducers/userReducer";
import { Navigate, useNavigate } from "react-router-dom";
import InputUI from "shared/ui/InputUI/InputUI";
import { ChangeEvent, FormEvent, useState } from "react";
import { ObjectType, setCookie } from "shared/helpers/helpers";
import { authUserSignin, editUserData } from "services/userService";
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
            setCookie('refreshToken', response.refreshToken, 365)
            dispatch(setIsLogged(true));
            navigate('/home');
        }
    }

    const testEdit = async () => {
        const testData = {
            email: 'test@tyest.tset',
            name: 'asdad',
            password: 'asdadadsa'
        }

        const response: any = await editUserData(testData, setErrors);
        console.log('response => ', response)
    }

    return (
        <div className='signin_container'>
            <img src={signinBG} alt="" />
            <ButtonUI onClick={testEdit}>TESTTT</ButtonUI>
            <div className='signin_text_block'>
                <HeadingUI text='Sign in' color='#a57867' size='40px' />
                <form action="" onSubmit={onSubmit}>
                    <InputUI type="text" placeholder="email" callback={handleInputChange} name="email" value={userData?.email} error={errors?.email} />
                    <InputUI type="password" placeholder="password" callback={handleInputChange} name="password" value={userData?.password}
                        error={errors?.password} />
                    <ButtonUI type="submit">Sign in</ButtonUI>
                </form>
            </div>
        </div>

    );
};

export default Signin;