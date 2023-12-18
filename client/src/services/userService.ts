import { setIsLogged, setUserData } from "redux/reducers/userReducer"
import { getShopifyUser } from "shared/api/dataApi"


export const getUserShopify = (dispatch: any, token: string) => {
    getShopifyUser({token}).then(res => {   
        if (res && res?._id) {
            dispatch(setUserData(res))
            return dispatch(setIsLogged(true))  
        }
        dispatch(setUserData({}))
        dispatch(setIsLogged(false))
    }).catch(err => {
        console.log(err)
        dispatch(setUserData({}))
        dispatch(setIsLogged(false))
    })
}