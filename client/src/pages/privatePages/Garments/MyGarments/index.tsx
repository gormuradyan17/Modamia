import CustomizationGarments from "pages/CustomizationGarments/CustomizationGarments"
import { useSelector } from "react-redux"
import { getUserData } from "redux/reducers/userReducer"

const MyGarments = () => {

  const userData = useSelector(getUserData)
  if (!userData.id) return <></>
  
  return (
    <div>
      <CustomizationGarments userId={userData?.id} />
    </div>
  )
}

export default MyGarments
