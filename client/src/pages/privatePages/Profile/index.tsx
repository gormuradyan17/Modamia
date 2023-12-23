import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData, getUserState, setUserState } from 'redux/reducers/userReducer'
import { ButtonUI } from 'shared/ui/ButtonUI/ButtonUI'
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI'
import InputUI from 'shared/ui/InputUI/InputUI'
import "./style.scss"
import { editUserData } from 'services/userService'
import { ObjectType, appColor } from 'shared/helpers/helpers'
import { Variant } from 'shared/ui/SnackbarUI/container/SnackbarContainer'
import useSnackbar from 'utils/hooks/useSnackbar'
import Container from 'layout/Container/Container'

const Profile = () => {
  const [edit, setEdit] = useState(false)
  const { appendSnackbar } = useSnackbar()
  
  const dispatch = useDispatch()
  const userData = useSelector(getUserData)
  const userState = useSelector(getUserState)
  const [errors, setErrors] = useState<ObjectType>({
    name: '',
    password: '',
    email: ''
  })

  useEffect(() => {
    dispatch(setUserState({ name: 'name', value: userData?.name }))
  }, [userData])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value } } = event
    dispatch(setUserState({ name, value }))
  }

  const editUserDetails = async () => {
    const data = Object.fromEntries(Object.entries(userState).filter(([_, v]) => v != null))
    const response: any = await editUserData(data, setErrors);
    
    if (response) {
      await appendSnackbar(Variant.success, {
        autoHideDuration: 5000,
        message: 'Profile data changed successfully!!'
      })
    }

  }

  return (
    <Container>
      <div className='profile_detail'>
        <HeadingUI text="Account Details" color={appColor} />
        <InputUI
          type='text'
          name="name"
          callback={handleInputChange}
          value={userState?.name}
          disabled={!edit}
          error={errors?.name}
          placeholder='New Name'
        />
        <InputUI
          type='email'
          name="email"
          callback={handleInputChange}
          value={userState.email}
          disabled={!edit}
          placeholder={userData?.email}
          error={errors?.email}
        />
        <InputUI
          type='password'
          name="password"
          callback={handleInputChange}
          value={userState?.password}
          disabled={!edit}
          placeholder='New Password'
          error={errors?.password}
        />
        <div className='btn_content'>
          <ButtonUI 
            onClick={() => !edit ? setEdit(!edit) : editUserDetails()}
          >{edit ? "Save" : "Edit"}</ButtonUI>
          {edit && <ButtonUI onClick={() => setEdit(false)}>cancel</ButtonUI>}
        </div>

      </div>
    </Container>
  )
}
export default Profile