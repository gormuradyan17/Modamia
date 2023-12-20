import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserData } from 'redux/reducers/userReducer'
import { ButtonUI } from 'shared/ui/ButtonUI/ButtonUI'
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI'
import InputUI from 'shared/ui/InputUI/InputUI'
import "./style.scss"

const Profile = () => {
  const [edit, setEdit] = useState(false)
  const userData = useSelector(getUserData)
  return (
    <div className='profile_detail'>
      <HeadingUI text="Account Details" />
      <InputUI type='text' name="name" callback={() => { }} value={userData?.name} disabled={!edit} />
      <InputUI type='email' name="email" callback={() => { }} value={userData?.email} disabled={!edit} />
      <InputUI type='password' name="password" callback={() => { }} value={userData?.name} disabled={!edit} />
      <div className='btn_content'>    
         <ButtonUI onClick={() => setEdit(!edit)}>{edit ? "Save" : "Edit"}</ButtonUI>
         {edit && <ButtonUI onClick={() => setEdit(false)}>cancel</ButtonUI>}
      </div>

    </div>
  )
}

export default Profile
