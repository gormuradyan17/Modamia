import signinBG from "../../assets/images/singin.gif"
import { ButtonUI } from 'shared/ui/ButtonUI/ButtonUI';
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI';
import "./style.scss"
import { useSelector } from "react-redux";
import { isLogged } from "redux/reducers/userReducer";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import InputUI from "shared/ui/InputUI/InputUI";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ObjectType, eraseCookie, getCookie } from "shared/helpers/helpers";
import { recPassword, sendForgotPassword } from "services/userService";

const Recovery = () => {
    const isAuth = useSelector(isLogged)
    const params = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState<ObjectType>({
        password: '',
        confirm: '',
        code: params?.code
    })
    const [errors, setErrors] = useState<ObjectType>({
        password: '',
        confirm: '',
        code: ''
    })
    
    useEffect(() => {
        return () => {
            eraseCookie('_s_pa')
        }
    },[])
    
    if (isAuth) return <Navigate to='/home' />
    if (!getCookie('_s_pa')) return <Navigate to='/signin' />


    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = event
        setData({
            ...data, 
            [name]: value
        })
    }
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (data.password && data.confirm && data.code) {
            const response = await recPassword(data, setErrors)
            if (response) {
                if (getCookie('_s_pa')) eraseCookie('_s_pa')
                navigate('/signin')
            }
        }
    }

    return (
        <div className='signin_container'>
            <img src={signinBG} alt="" />
            <div className='signin_text_block'>
                <HeadingUI text='Change password' color='#a57867' size='40px' />
                <form action="" onSubmit={onSubmit}>
                    <InputUI
                        type="password"
                        placeholder="password"
                        callback={handleInputChange}
                        name="password"
                        value={data?.password}
                        error={errors?.password}
                    />
                    <InputUI
                        type="password"
                        placeholder="confirm password"
                        callback={handleInputChange}
                        name="confirm"
                        value={data.confirm}
                        error={errors?.confirm || errors?.code} />
                    <ButtonUI type="submit">Change Password</ButtonUI>
                </form>
            </div>
        </div>

    );
};

export default Recovery;