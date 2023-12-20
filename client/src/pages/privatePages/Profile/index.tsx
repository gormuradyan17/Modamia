import { useSelector } from 'react-redux'
import { getUserData } from 'redux/reducers/userReducer'
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI'

const Profile = () => {
  const userData = useSelector(getUserData)
  
  return (
    <div>
      <HeadingUI text="Account Details"/>
      
    </div>
  )
}

export default Profile
