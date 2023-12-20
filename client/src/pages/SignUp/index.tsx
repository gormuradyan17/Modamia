import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI"
import HeadingUI from "shared/ui/HeadingUI/HeadingUI"
import InputUI from "shared/ui/InputUI/InputUI"
import signinBG from "../../assets/images/singin.gif"
import "./style.scss"
import { useDispatch, useSelector } from "react-redux"
import { getUserState, setUserState } from "redux/reducers/userReducer"
import { ChangeEvent, FormEvent, useState } from "react"
import { ObjectType } from "shared/helpers/helpers"
import { authUserSignUp } from "services/userService"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const userData = useSelector(getUserState)
  const [errors, setErrors] = useState<ObjectType>({
      name:'',
      password: '',
      repeatPass:'',
      email: ''
  })
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value } } = event
    dispatch(setUserState({ name, value }))
}


const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const response: any = await authUserSignUp(userData, setErrors);
  // if (response?.accessToken) {
  //     setCookie('accessToken', response.accessToken, 365)
  //     dispatch(setIsLogged(true));
  //     navigate('/si');
  // }
}


  return (
    <div className='signin_container'>
    <img src={signinBG} alt="" />
    <div className='signin_text_block'>
        <HeadingUI text='Sign in' color='#a57867' size='40px'/>
        <form onSubmit={onSubmit}>
            <InputUI type="text" placeholder="name" callback={handleInputChange} name="name" value={userData?.name}   error={errors?.name}/>
            <InputUI type="email" placeholder="email" callback={handleInputChange} name="email" value={userData?.email}   error={errors?.email}/>
            <InputUI type="password" placeholder="password" callback={handleInputChange} name="password" value={userData?.password}   error={errors?.password}/>
            <InputUI type="password" placeholder="repeat password" callback={handleInputChange} name="repeatPass"  value={userData?.repeatPass}   error={errors?.repeatPass}/>
            <ButtonUI type="submit">Sign in</ButtonUI>
        </form>
      </div>
    </div>
  )
}

export default SignUp
