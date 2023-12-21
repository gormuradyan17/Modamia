import { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData, getUserState, setUserState } from 'redux/reducers/userReducer'
import { ButtonUI } from 'shared/ui/ButtonUI/ButtonUI'
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI'
import InputUI from 'shared/ui/InputUI/InputUI'
import "./style.scss"

const Profile = () => {
  const dispatch=useDispatch()
  const [edit, setEdit] = useState(false)
  const userData = useSelector(getUserData)
  const userNewData = useSelector(getUserState)
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value } } = event
    dispatch(setUserState({ name, value }))
  }
  console.log(userData,"userNewData");
  
  return (
    <div className='profile_detail'>
      <HeadingUI text="Account Details" />
      <InputUI type='text' name="name" callback={handleInputChange} value={userNewData?.name ? userNewData?.name :userData?.name} disabled={!edit} />
      <InputUI type='email' name="email" callback={handleInputChange} value={userNewData?.email ? userNewData?.email :userData?.email} disabled={!edit} />
      <InputUI type='password' name="password" callback={handleInputChange} value={userNewData?.password ? userNewData?.password :userData?.password} disabled={!edit} />
      <div className='btn_content'>    
         <ButtonUI onClick={() => setEdit(!edit)}>{edit ? "Save" : "Edit"}</ButtonUI>
         {edit && <ButtonUI onClick={() => setEdit(false)}>cancel</ButtonUI>}
      </div>

    </div>
  )
}

export default Profile
