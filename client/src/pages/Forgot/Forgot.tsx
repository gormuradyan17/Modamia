import signinBG from "../../assets/images/singin.gif"
import { ButtonUI } from 'shared/ui/ButtonUI/ButtonUI';
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI';
import "./style.scss"
import { useSelector } from "react-redux";
import { isLogged } from "redux/reducers/userReducer";
import { Navigate } from "react-router-dom";
import InputUI from "shared/ui/InputUI/InputUI";
import { ChangeEvent, FormEvent, useState } from "react";
import { ObjectType, appColor, setCookie } from "shared/helpers/helpers";
import { sendForgotPassword } from "services/userService";
import CustomizationLoader from "components/Customization/customizationLoader/CustomizationLoader";
const Forgot = () => {
    const isAuth = useSelector(isLogged)
    const [isMailSent, setIsMailSent] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [errors, setErrors] = useState<ObjectType>({
        email: ''
    })
    if (isAuth) return <Navigate to='/home' />

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = event
        setEmail(value)
    }
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (email) {
            setIsLoading(true)
            const response = await sendForgotPassword({ email }, setErrors)
            if (response) {
                setIsMailSent(true)
                setCookie('_s_pa', 'p0JjNMzD0KS3K8]/TBb6TfV%)GLY]8', 1)
                setIsLoading(false)
            } else {
                setIsLoading(false)
            }
            
        }
    }

    return (
        <div className='signin_container'>
            <img src={signinBG} alt="" />
            <div className='signin_text_block'>
                <HeadingUI text='Password recovery' color='#a57867' size='40px' />
                {isMailSent ? <HeadingUI
                    size="16px"
                    color={appColor}
                    classN="recovery-text"
                    align="center"
                    text="The recovery email sent successfully! Please check your email."
                /> : <form action="" onSubmit={onSubmit}>
                    <InputUI type="text" placeholder="email" callback={handleInputChange} name="email" value={email} error={errors?.email} />
                    <ButtonUI type="submit">Send email</ButtonUI>
                </form>}
                {isLoading && <CustomizationLoader classN='forgot-loader' />}
            </div>
        </div>

    );
};

export default Forgot;